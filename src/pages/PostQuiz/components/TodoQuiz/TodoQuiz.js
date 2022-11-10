import classNames from 'classnames/bind';
import styles from './TodoQuiz.module.scss';

import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function TodoQuiz() {
    const [, setQuiz] = useState([]);
    const [form, setForm] = useState({
        question: '',
        options: [],
        answer: '',
    });

    const quizCollectionRef = collection(db, 'quiz');

    useEffect(() => {
        onSnapshot(quizCollectionRef, (snapshot) => {
            setQuiz(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
        });
    }, [quizCollectionRef, form]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.options || !form.question || !form.answer) {
            alert('Please fill out all fields');
            return;
        }

        addDoc(quizCollectionRef, form);
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
                            <div className="form-group">
                                <div className={cx('question')}></div>
                                <input
                                    className={cx('question-input')}
                                    type="text"
                                    value={form.question}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            question: e.target.value,
                                        })
                                    }
                                    placeholder="Nhập câu hỏi tại đây"
                                />
                            </div>

                            <div className="form-group">
                                <div className={cx('option')}>Câu trả lời</div>
                                {form.options.map((opt, i) => (
                                    <input
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
                                <input
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
                            </div>
                            <div className={cx('save-option-btn')}>
                                <Button primary type="submit">
                                    Lưu câu trả lời
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
