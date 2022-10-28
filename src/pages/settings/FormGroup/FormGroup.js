import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from '~/components/Button';
import styles from './FormGroup.module.scss';

const cx = classNames.bind(styles);

function FormGroup({ unUpdate, label, desc, value, type }) {
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        return () => {
            file && URL.revokeObjectURL(file);
        };
    }, [file]);

    const handleChangeFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-group')}>
                <Row>
                    <Col className={cx('form-group-left')} md={7}>
                        <label className={cx('form-group-lable')} htmlFor="">
                            {label}
                        </label>
                        {type === 'file' ? (
                            <>
                                <div className={cx('input-file-block')}>
                                    {file && (
                                        <div
                                            className={cx('preview-img-block')}
                                        >
                                            <img
                                                className={cx('preview-img')}
                                                src={file}
                                                alt="avatar"
                                            />
                                        </div>
                                    )}
                                    <label htmlFor="avatar">
                                        <div>
                                            <input
                                                ref={inputRef}
                                                name="avatar"
                                                id="avatar"
                                                className={cx(
                                                    'input',
                                                    'input-file',
                                                )}
                                                type={type}
                                                disabled
                                                onChange={handleChangeFile}
                                            />
                                        </div>
                                        {visibleUpdate && (
                                            <div className={cx('input-mark')}>
                                                <ion-icon
                                                    className={cx('icon')}
                                                    name="camera-outline"
                                                ></ion-icon>
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </>
                        ) : (
                            <input
                                ref={inputRef}
                                className={cx('input')}
                                type={type}
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                }}
                                disabled
                            />
                        )}

                        <p className={cx('form-group-desc')}>{desc}</p>
                    </Col>
                    {unUpdate ? (
                        ''
                    ) : (
                        <Col
                            className={cx('form-group-right')}
                            md={{
                                span: 4,
                                offset: 1,
                            }}
                        >
                            {visibleUpdate ? (
                                <>
                                    <Button rounded>Lưu</Button>
                                    <Button
                                        secondary
                                        rounded
                                        onClick={() => {
                                            setVisibleUpdate(false);
                                            setInputValue(value);
                                            inputRef.current.disabled = true;
                                        }}
                                    >
                                        Hủy
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    secondary
                                    onClick={() => {
                                        setVisibleUpdate(true);
                                        inputRef.current.disabled = false;
                                        inputRef.current.focus();
                                    }}
                                    rounded
                                >
                                    Chỉnh sửa
                                </Button>
                            )}
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    );
}

export default FormGroup;
