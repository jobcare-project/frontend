import uuid from 'react-uuid';
import classNames from 'classnames/bind';
import styles from './RadioInput.module.scss';

//components
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const RadioInput = ({
    item,
    handleValueQuestion,
    handleValueAnswer,
    deleteEl,
    addOption,
    handleOptionValues,
    deleteOption,
}) => {
    //Create new option
    const createNewOption = (id) => {
        console.log(id, typeof id, 'this is id');
        const data = {
            id: uuid(),
        };
        addOption(id, data);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('input')}>
                    <input
                        className={cx('input-question')}
                        defaultValue={item.question}
                        onChange={(e) => handleValueQuestion(item.id, e)}
                        name={'question'}
                        placeholder="Nhập câu hỏi"
                    />
                    {item.options &&
                        item.options.length > 0 &&
                        item.options.map((opt, key) => (
                            <div>
                                <input
                                    className={cx('input-option')}
                                    placeholder={`Nhập câu trả lời ${key + 1}`}
                                    defaultValue={opt?.value}
                                    key={opt?.id}
                                    onChange={(e) =>
                                        handleOptionValues(
                                            item?.id,
                                            opt?.id,
                                            e.target.value,
                                        )
                                    }
                                />

                                <Button
                                    text
                                    onClick={() =>
                                        deleteOption(item.id, opt?.id)
                                    }
                                >
                                    Xóa
                                </Button>
                            </div>
                        ))}

                    <div>
                        <Button text onClick={() => createNewOption(item.id)}>
                            Thêm câu trả lời
                        </Button>
                    </div>
                    <input
                        className={cx('input-answer')}
                        defaultValue={item.answer}
                        onChange={(e) => handleValueAnswer(item.id, e)}
                        name={'answer'}
                        placeholder="Nhập đáp án"
                    />
                </div>
            </div>
            <div>
                <Button outline onClick={() => deleteEl(item.id)}>
                    Xóa
                </Button>
            </div>
        </div>
    );
};

export default RadioInput;
