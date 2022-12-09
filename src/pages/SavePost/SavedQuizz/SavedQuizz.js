import React from 'react';
import styles from './SavedQuizz.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
function SavedQuizz() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <h2>SavedQuizz</h2>
            </div>
        </Container>
    );
}

export default SavedQuizz;
