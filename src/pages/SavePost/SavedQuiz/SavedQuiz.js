import React from 'react';
import styles from './SavedQuiz.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
function SavedQuiz() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h2 className={cx('title-header')}>Bài Quiz đã lưu</h2>
                </div>
            </div>
        </Container>
    );
}

export default SavedQuiz;
