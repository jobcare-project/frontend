import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Nestable from 'react-nestable';
import classNames from 'classnames/bind';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Col, Row } from 'react-bootstrap';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import styles from './FormBuilder.module.scss';

//Form Elements
import RadioInput from './Elements/RadioInput/RadioInput.js';
import { formEl } from './Constants.js';
//Components
import Header from './Header';
import Button from '~/components/Button/index.js';
import DropDown from '~/components/Input/DropDown/DropDown';
//firebase
import { db, storage } from '~/config/Firebase/firebase';

const cx = classNames.bind(styles);

function FormBuilder() {
    const initVal = formEl[0]?.value;

    //State title
    const [title, setTitle] = useState('');
    //state desc
    const [description, setDescription] = useState('');
    //state data (question , option , answer)
    const [data, setData] = useState([]);
    //state form of data
    const [formData, setFormData] = useState('');
    //state category
    const [category, SetCategory] = useState('');
    //state upload image
    const [file, setFile] = useState(null);
    //state choose image from PC
    const [, setProgress] = useState(null);
    //state form image
    const [image, setImage] = useState('');
    //state Loading

    //Function leve page
    const history = useNavigate();

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
                            setImage(() => downloadUrl);
                        },
                    );
                },
            );
        };

        file && uploadFile();
    }, [file]);
    //Category of quiz
    const categoryOption = [
        {
            value: '',
            name: 'Công nghệ thông tin',
        },
        {
            value: '1',
            name: 'Marketing',
        },
        {
            value: '2',
            name: 'Quản trị kinh doanh',
        },
        {
            value: '3',
            name: 'Ngôn ngữ học',
        },
    ];

    // Function add category
    const onCategoryChange = (e) => {
        SetCategory({ ...category, category: e.target.value });
    };

    const items = data;

    //Function to add new element
    const addElement = () => {
        const data = {
            id: uuid(),
            question: '',
            answer: '',
            type: formData,
            required: false,
        };
        setData((prevState) => [...prevState, data]);
        setFormData(initVal);
    };

    //Function to delete element
    const deleteEl = (id) => {
        setData((prevState) => prevState.filter((val) => val.id !== id));
    };

    //Function to add element at specific pos and return arr
    const addAfter = (elArray, index, newEl) => {
        return [
            ...elArray.slice(0, index + 1),
            newEl,
            ...elArray.slice(index + 1),
        ];
    };

    //Function to duplicate element
    const duplicateElement = (elId, elType) => {
        let elIdx = data.findIndex((el) => el.id === elId);
        let newEl = {
            id: uuid(),
            question: '',
            answer: '',
            type: elType,
            required: false,
        };
        let newArr = addAfter(data, elIdx, newEl);
        setData(newArr);
    };

    //Function to handle sorting of elements
    const handleOnChangeSort = ({ items }) => {
        setData(items);
    };

    //Function to Handle Input Question Values
    const handleValueQuestion = (id, e) => {
        let newArr = data.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    question: e.target.value,
                };
            } else {
                return el;
            }
        });
        setData(newArr);
    };
    //Function to Handle Input Answer Values
    const handleValueAnswer = (id, e) => {
        let newArr = data.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    answer: e.target.value,
                };
            } else {
                return el;
            }
        });
        setData(newArr);
    };

    //Function to Handle Required
    const handleRequired = (id) => {
        let newArr = data.map((el) => {
            if (el.id === id) {
                return { ...el, required: !el.required };
            } else {
                return el;
            }
        });
        setData(newArr);
    };

    //Function to Handle Element Type
    const handleElType = (id, type) => {
        let newArr = data.map((el) => {
            if (el.id === id) {
                return { ...el, type: type };
            } else {
                return el;
            }
        });
        setData(newArr);
    };

    //Function to Handle Options
    const addOption = (id, newOption) => {
        let newArr = data.map((el) => {
            if (el.id === id) {
                const objVal = 'options' in el ? el?.options : [];
                return { ...el, options: [...objVal, newOption] };
            } else {
                return el;
            }
        });
        setData(newArr);
    };

    //Function to Change Option Values
    const handleOptionValues = (elId, optionId, optionVal) => {
        let newArr = data.map((el) => {
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
        setData(newArr);
    };

    //Function to Delete Optin
    const deleteOption = (elId, optionId) => {
        let newArr = data.map((el) => {
            if (el.id === elId) {
                let newOptions =
                    el?.options &&
                    el?.options.filter((opt) => opt.id !== optionId);
                return { ...el, options: newOptions };
            } else {
                return el;
            }
        });
        setData(newArr);
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
                duplicateElement={duplicateElement}
            />
        );
    };

    console.log(data);

    //Submit to firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            title !== '' &&
            description !== '' &&
            data !== [] &&
            category !== [] &&
            image !== [] &&
            formData !== ''
            
        ) {
            await addDoc(collection(db, 'quiz'), {
                title,
                description,
                data,
                formData,
                category,
                image,
                timestamp: serverTimestamp(),
            });
            window.confirm('Bạn có muốn đăng bài quiz ?')
        } else {
            return toast.error('Hãy điền đầy đủ các trường');
        }
        history(-1);
    };

    return (
        <>
            <div>
                <div className={cx('category')}>
                    <div value={category} onChange={onCategoryChange}>
                        <div className={cx('title-category')}>
                            Bạn hãy chọn lĩnh vực về bài Quiz của bạn
                        </div>
                        <Row lg={4}>
                            <Col>
                                <div className={cx('dropdown')}>
                                    <DropDown data={categoryOption} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Header
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                />
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
                >
                    Đăng bài
                </Button>
            </div>
        </>
    );
}

export default FormBuilder;
