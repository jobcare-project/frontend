import classNames from 'classnames/bind';
import styles from './FormPost.module.scss';
import { useState } from 'react';
import TodoQuiz from '../components/TodoQuiz';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FormPost() {
    const [formFields, setFormFields] = useState([{ question: '' }]);

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields);
    };

    const addFields = () => {
        let object = {
            question: '',
        };
        setFormFields([...formFields, object]);
    };

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1);
        setFormFields(data);
    };

    return (
        <div className={cx('wrapper')}>
            <div onSubmit={submit}>
                {formFields.map((form, index) => {
                    return (
                        <div key={index} className={cx('inner')}>
                            <div className={cx('question')}>
                                <div className={cx('name')}>Câu hỏi</div>
                                <div className={cx('current-question')}>
                                    {index + 1}
                                </div>
                            </div>
                            <TodoQuiz/>
                            <div className={cx('delete-question')}>
                                <Button
                                className={cx('delete-question-btn')}
                                text
                                    onClick={() => removeFields(index)}
                                >
                                    <div className={cx('delete-question-text')}>
                                        Xóa câu hỏi
                                    </div>
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('add-question')}>
                <Button text onClick={addFields}
                className={cx('add-question-btn')}>
                    <div>
                        Thêm câu hỏi
                    </div>
                </Button>
            </div>
            <br />
            <div>CÔNG KHAI: Quiz được hiện trên trang cá nhân.</div>
            <div>
                CÁ NHÂN: Quiz không hiện trên trang cá nhân và người dùng khác
                không truy cập được.
            </div>
            <br />
            <Button
                primary
                onClick={submit}
                className={cx('submit-question-btn')}
            >
                <div className={cx('submit-question-text')}>
                    Đăng bài
                </div>
            </Button>{' '}
        </div>
    );
}

export default FormPost;
