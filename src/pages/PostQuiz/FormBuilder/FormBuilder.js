import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Nestable from 'react-nestable';
import classNames from 'classnames/bind';
import {
    addDoc,
    collection,
    getDoc,
    serverTimestamp,
    doc,
    updateDoc,
} from 'firebase/firestore';
import { Col, Row } from 'react-bootstrap';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './FormBuilder.module.scss';

//Form Elements
import RadioInput from './Elements/RadioInput/RadioInput.js';
import { formEl } from './Constants.js';
//Components
import Button from '~/components/Button/index.js';
import DropDown from '~/components/Input/DropDown/DropDown';
//firebase
import { db, storage } from '~/config/Firebase/firebase';

const cx = classNames.bind(styles);

const initialState = {
    title: '',
    description: '',
    category: '',
};

//Category of quiz
const categoryOption = [
    {
        value: '1',
        name: 'Công nghệ thông tin',
    },
    {
        value: '2',
        name: 'Marketing',
    },
    {
        value: '3',
        name: 'Quản trị kinh doanh',
    },
    {
        value: '4',
        name: 'Ngôn ngữ học',
    },
];

function FormBuilder() {
    const initVal = formEl[0]?.value;
    const [form, setForm] = useState(initialState);
    //get id from firebase from useParams
    const { id } = useParams();
    const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
    //state form of data
    const [formData, setFormData] = useState('');
    //state upload image
    const [file, setFile] = useState(null);
    //state choose image from PC
    const [progress, setProgress] = useState(null);
    //state form image
    const [image, setImage] = useState('');

    const { title, category, description } = form;

    //Function leve page
    const history = useNavigate();

    // Detail update quiz
    useEffect(() => {
        id && getPostQuizDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    //Function detail quiz
    const getPostQuizDetail = async () => {
        const docRef = doc(db, 'quiz', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setForm({ ...snapshot.data() });
        }
    };
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    //upload file
    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setProgress(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadUrl) => {
                            toast.info('Image upload to firebase successfully');
                            setImage(() => downloadUrl);
                        },
                    );
                },
            );
        };

        file && uploadFile();
    }, [file]);
    // Function add category
    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const items = questions;

    //Function to add new element
    const addElement = () => {
        const questions = {
            id: uuid(),
        };
        setQuestions((prevState) => [...prevState, questions]);
        setFormData(initVal);
    };

    //Function to delete element
    const deleteEl = (id) => {
        setQuestions((prevState) => prevState.filter((val) => val.id !== id));
    };

    //Function to handle sorting of elements
    const handleOnChangeSort = ({ items }) => {
        setQuestions(items);
    };

    //Function to Handle Input Question Values
    const handleValueQuestion = (id, e) => {
        let newArr = questions.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    question: e.target.value,
                };
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };
    //Function to Handle Input Answer Values
    const handleValueAnswer = (id, e) => {
        let newArr = questions.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    answer: e.target.value,
                };
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };

    //Function to Handle Required
    const handleRequired = (id) => {
        let newArr = questions.map((el) => {
            if (el.id === id) {
                return { ...el, required: !el.required };
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };

    //Function to Handle Element Type
    const handleElType = (id, type) => {
        let newArr = questions.map((el) => {
            if (el.id === id) {
                return { ...el, type: type };
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };

    //Function to Handle Options
    const addOption = (id, newOption) => {
        let newArr = questions.map((el) => {
            if (el.id === id) {
                const objVal = 'options' in el ? el?.options : [];
                return { ...el, options: [...objVal, newOption] };
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };

    //Function to Change Option Values
    const handleOptionValues = (elId, optionId, optionVal) => {
        let newArr = questions.map((el) => {
            if (el.id === elId) {
                el?.options &&
                    el?.options.map((opt) => {
                        if (opt.id === optionId) {
                            opt.value = optionVal;
                        }
                    });
                return el;
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };

    //Function to Delete Optin
    const deleteOption = (elId, optionId) => {
        let newArr = questions.map((el) => {
            if (el.id === elId) {
                let newOptions =
                    el?.options &&
                    el?.options.filter((opt) => opt.id !== optionId);
                return { ...el, options: newOptions };
            } else {
                return el;
            }
        });
        setQuestions(newArr);
    };

    //Render items
    const renderElements = ({ item }) => {
        return (
            <RadioInput
                item={item}
                handleValueQuestion={handleValueQuestion}
                handleValueAnswer={handleValueAnswer}
                deleteEl={deleteEl}
                handleRequired={handleRequired}
                handleElType={handleElType}
                addOption={addOption}
                handleOptionValues={handleOptionValues}
                deleteOption={deleteOption}
            />
        );
    };

    console.log(questions);

    //Submit to firebase
    const handleSubmit = async () => {
        if (
            title &&
            description &&
            category &&
            image &&
            formData &&
            items &&
            questions &&
            window.confirm('Bạn có muốn đăng bài quiz ?')
        ) {
            if (!id) {
                try {
                    await addDoc(collection(db, 'quiz'), {
                        ...form,
                        questions,
                        category,
                        image,
                        timestamp: serverTimestamp(),
                    });

                    toast.success('Bài quiz đã được đăng thành công');
                } catch (err) {
                    console.log(err);
                }
            } else {
                try {
                    await updateDoc(doc(db, 'quiz', id), {
                        ...form,
                        questions,
                        category,
                        image,
                        timestamp: serverTimestamp(),
                    });
                    toast.success('Bài quiz đã được cập nhật thành công');
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            return toast.error('Hãy điền đầy đủ các trường');
        }

        history(-1);
    };

    return (
        <>
            <div>
                <div className={cx('category')}>
                    <div className={cx('add-question-title')}>
                        {id ? 'Chỉnh sửa bài quiz' : 'Tạo bài quiz mới'}
                    </div>
                    <div>
                        <div className={cx('title-category')}>
                            Bạn hãy chọn lĩnh vực về bài Quiz của bạn
                        </div>
                        <Row lg={4}>
                            <Col>
                                <div
                                    className={cx('dropdown')}
                                    value={category}
                                    onChange={onCategoryChange}
                                >
                                    <DropDown
                                        title="Chọn ngành nghề"
                                        data={categoryOption}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className={cx('title-quiz')}>Tên bài quiz</div>
                    <input
                        secondary
                        className={cx('input-title')}
                        type="text"
                        placeholder="Nhập tên bài Quiz tại đây"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div className={cx('title-describe')}>Mô tả bài quiz</div>
                    <input
                        placeholder="Nhập nội dung Quiz tại đây"
                        className={cx('input-describe')}
                        value={description}
                        name="description"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className={cx('title-image')}>Chọn ảnh đại diện</div>
                    <input
                        type="file"
                        className={cx('image')}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <Nestable
                    items={items}
                    questions={questions}
                    setQuestions={setQuestions}
                    renderItem={renderElements}
                    maxDepth={1}
                    onChange={handleOnChangeSort}
                />
            </div>

            <div>
                <Button outline onClick={addElement}>
                    Thêm câu hỏi
                </Button>
            </div>
            <div className={cx('submit')}>
                <Button
                    primary
                    className={cx('submit-btn')}
                    onClick={handleSubmit}
                    disabled={progress !== null && progress < 100}
                >
                    {id ? 'Chỉnh sửa' : 'Đăng bài'}
                </Button>
            </div>
        </>
    );
}

export default FormBuilder;
