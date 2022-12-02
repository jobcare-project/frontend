import React from 'react';
import styles from './SavedPost.module.scss';
import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '~/components/Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import { fetchListJob } from '~/pages/Home/homeSlice';
import { fetchDeletedJobDesc } from '../Home/homeSlice';
import SavedPostItem from './SavedPostItem';
import SavedRecruitment from './SavedRecruitment/SavedRecruitment';
import SavedQuizz from './SavedQuizz/SavedQuizz';

const cx = classNames.bind(styles);
function SavePost() {
    return (
        <Container>
            <SavedRecruitment />
            {/* <SavedQuizz /> */}
        </Container>
    );
}

export default SavePost;
