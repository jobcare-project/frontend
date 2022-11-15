import classNames from 'classnames/bind';
import styles from './AddOption.module.scss';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const cx = classNames.bind(styles);

function AddOption() {
    const [formFields, setFormFields] = useState([{ name: '' }]);

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
            name: '',
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
                        <div key={index}>
                            <Form.Check
                                className={cx('check')}
                                name="mode"
                                label="Câu này đúng"
                                type="radio"
                            />
                            <input
                                name="name"
                                placeholder="option"
                                onChange={(event) =>
                                    handleFormChange(event, index)
                                }
                                value={form.name}
                                className={cx('options-input')}
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => removeFields(index)}
                                className={cx('delete-option-btn')}
                            >
                                <ion-icon name="close-circle-outline"></ion-icon>{' '}
                                Xóa câu trả lời
                            </Button>{' '}
                        </div>
                    );
                })}
            </div>
            <Button
                variant="outline-secondary"
                onClick={addFields}
                className={cx('add-option-btn')}
            >
                <ion-icon name="add-circle-outline"></ion-icon>
                Thêm câu trả lời
            </Button>{' '}
            <br />
            <div>
                <Button
                    variant="outline-secondary"
                    onClick={submit}
                    className={cx('save-option-btn')}
                >
                    <div className={cx('save-option-text')}>
                        {' '}
                        <ion-icon name="save-outline"></ion-icon> Lưu câu trả lời
                    </div>
                </Button>{' '}
            </div>
        </div>
    );
}

export default AddOption;
