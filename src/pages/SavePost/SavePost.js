import React from 'react';
import styles from './SavePost.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import DropDownPage from './DropDownPage/DropDownPage';

const cx = classNames.bind(styles);
function SavePost() {
    return (
        <Container>
            <DropDownPage></DropDownPage>
        </Container>
    );
}

export default SavePost;
