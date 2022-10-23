import classNames from 'classnames/bind';
import styles from './AddQuestion.module.scss';
import { useState } from 'react';
import AddOption from '../AddOption';
import Button from 'react-bootstrap/Button';

const cx = classNames.bind(styles);

function AddQuestion() {
    const [formFields, setFormFields] = useState([{ question: '' }]);

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    };

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
                            <div className={cx('current-question')}>
                                {index + 1}
                            </div>

                            <input
                                name="question"
                                placeholder="Question"
                                onChange={(event) =>
                                    handleFormChange(event, index)
                                }
                                value={form.question}
                                className={cx('questions-input')}
                            />

                            <Button
                                variant="outline-success"
                                onClick={() => removeFields(index)}
                                className={cx('delete-question-btn')}
                            >
                                <div className={cx('delete-question-text')} >
                                <ion-icon name="close-circle-outline"></ion-icon>
                                Xóa câu hỏi
                                </div>
                                
                            </Button>
                            <AddOption />
                        </div>
                    );
                })}
            </div>
            <Button
                variant="outline-success"
                onClick={addFields}
                className={cx('add-question-btn')}
            >
                <div className={cx('add-question-text')}>
                <ion-icon name="add-circle-outline"></ion-icon>
                Thêm câu hỏi
                </div>
                
            </Button>
            <br />
            <div>
            CÔNG KHAI: Quiz được hiện trên trang cá nhân. 
            </div>
            <div>
            CÁ NHÂN: Quiz không hiện trên trang cá nhân và người dùng khác không truy cập được.
            </div>
            <br/>
            <Button
                variant="primary"
                onClick={submit}
                className={cx('submit-question-btn')}
            >
                <div  className={cx('submit-question-text')} >
                Đăng bài
                <ion-icon name="send-outline"></ion-icon>
                </div>
                
            </Button>{' '}
        </div>
    );
}

export default AddQuestion;
