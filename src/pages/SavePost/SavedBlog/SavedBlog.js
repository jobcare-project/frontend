import React from 'react';
import styles from './SavedBlog.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
function SavedBlog() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <h2>SavedBlog</h2>
            </div>
        </Container>
    );
}

export default SavedBlog;
