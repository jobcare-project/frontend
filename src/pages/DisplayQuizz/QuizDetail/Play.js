import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Play.module.scss';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Play = ({ setUsername }) => {
    const inputRef = useRef();

    const history = useNavigate();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    Bài Quiz này được cung cấp bởi nhà tuyển dụng uy tín, nó có
                    thể sẽ hữu ích với bạn trên con đường tìm việc làm và hoàn
                    thiện kiến thức của bản thân
                </div>
                <input
                    placeholder="Hãy nhấn bắt đầu hoặc bất kỳ kí tự nào"
                    className={cx('primary')}
                    ref={inputRef}
                />
                <div className={cx('button')}>
                    <button onClick={handleClick}>
                        <div className={cx('startButton')}>Bắt đầu</div>
                    </button>
                    <Button
                        primary
                        className={cx('back-after')}
                        onClick={() => history(-1)}
                    >
                        Quay lại trang chủ
                    </Button>{' '}
                </div>
            </div>
        </Container>
    );
};

export default Play;
