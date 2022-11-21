import classNames from 'classnames/bind';
import styles from './TodoQuiz.module.scss';

import { db, storage } from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { Col, Row } from 'react-bootstrap';

import Button from '~/components/Button';
import Input from '~/components/Input/Input/Input';
import DropDown from '~/components/Input/DropDown/DropDown';

const cx = classNames.bind(styles);

function TodoQuiz() {
    const [file, setFile] = useState(null);
    const [, setProgress] = useState(null);
    const [form, setForm] = useState({
        title: '',
        desc: '',
        category: '',
        questions: [{ question: '', options: [], answer: '' }],
    });

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

    const quizCollectionRef = collection(db, 'quiz');

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
                            setForm((prev) => ({
                                ...prev,
                                imgUrl: downloadUrl,
                            }));
                        },
                    );
                },
            );
        };

        file && uploadFile();
    }, [file]);

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(quizCollectionRef, form);
    };

    const handleQuestion = (e, i) => {
        const QuestionClone = [...form.questions];

        QuestionClone[i] = e.target.value;

        setForm({
            ...form,
            questions: QuestionClone,
        });
    };

    const handleQuestionCount = () => {
        setForm({
            ...form,
            questions: [...form.questions, ''],
        });
    };

    const handleOption = (e, i) => {
        const OptionClone = [...form.options];

        OptionClone[i] = e.target.value;

        setForm({
            ...form,
            options: OptionClone,
        });
    };

    const handleOptionCount = () => {
        setForm({
            ...form,
            options: [...form.options, ''],
        });
    };
    return (
        <div className={cx('wrapper')}>
            {
                <div className="popup">
                    <div className="popup-inner">
                        <form onSubmit={handleSubmit}>
                            <div className={cx('category')}>
                                <div
                                    value={form.category}
                                    onChange={onCategoryChange}
                                >
                                    <div className={cx('title-category')}>
                                        Bạn hãy chọn lĩnh vực về bài Quiz của
                                        bạn
                                    </div>
                                    <Row lg={4}>
                                        <Col>
                                            <div className={cx('dropdown')}>
                                                <DropDown
                                                    data={categoryOption}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div>
                                <div className={cx('title-quiz')}>
                                    Tên bài quiz
                                </div>
                                <Input
                                    className={cx('input-title-quiz')}
                                    type="text"
                                    value={form.title}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            title: e.target.value,
                                        })
                                    }
                                    placeholder="Nhập tên bài quiz ở đây"
                                />
                            </div>
                            <div>
                                <div className={cx('title-describe')}>
                                    Mô tả bài quiz
                                </div>
                                <Input
                                    className={cx('input-describe')}
                                    type="text"
                                    value={form.desc}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            desc: e.target.value,
                                        })
                                    }
                                    placeholder="Nhập mô tả bài quiz ở đây"
                                />
                            </div>
                            <div>
                                <div className={cx('title-image')}>
                                    Chọn ảnh đại diện
                                </div>
                                <input
                                    type="file"
                                    className={cx('image')}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>

                            <div className="form-group">
                                {form.questions.map((ques, i) => (
                                    <div
                                        type="text"
                                        key={i}
                                        value={ques}
                                        onChange={(e) => handleQuestion(e, i)}
                                    >
                                        
                                    </div>
                                ))}
                                <Button
                                    outline
                                    type="button"
                                    onClick={handleQuestionCount}
                                    className={cx('add-option-btn')}
                                >
                                    Thêm câu hoi
                                </Button>
                            </div>
                            {/* 

                            <div className="form-group">
                                <div className={cx('option')}>Câu trả lời</div>
                                {form.options.map((opt, i) => (
                                    <Input
                                        className={cx('option-input')}
                                        type="text"
                                        key={i}
                                        value={opt}
                                        onChange={(e) => handleOption(e, i)}
                                        placeholder="Nhập câu trả lời ở đây"
                                    />
                                ))}
                                <Button
                                    outline
                                    type="button"
                                    onClick={handleOptionCount}
                                    className={cx('add-option-btn')}
                                >
                                    Thêm câu trả lời
                                </Button>
                            </div>
                            <div className="form-group">
                                <div className={cx('answer')}>Đáp án</div>
                                <Input
                                    className={cx('answer-input')}
                                    type="text"
                                    value={form.answer}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            answer: e.target.value,
                                        })
                                    }
                                    placeholder="Nhập đáp án tại đây"
                                />
                            </div> */}
                            <div className={cx('save-option-btn')}>
                                <Button primary type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
}

export default TodoQuiz;
