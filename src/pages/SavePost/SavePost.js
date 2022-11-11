import React from 'react';
import styles from './SavePost.module.scss';
import classNames from 'classnames/bind';
import Pagination from '~/components/Pagination/Pagination';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
function SavePost() {
    return (
        <Container>
            <div>
                <Pagination />
            </div>
        </Container>
    );
}

export default SavePost;
