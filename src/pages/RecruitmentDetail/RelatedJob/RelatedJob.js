import React from 'react';
import styles from './RelatedJob.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '~/components/Card/Card';
import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '~/config/Firebase/firebase';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import { fetchListJob } from '~/pages/Home/homeSlice';
import config from '~/config';
const cx = classNames.bind(styles);

export default function RelatedJob() {
    const dispatch = useDispatch();
    const jobListData = useSelector(jobListSelector);
    ////State quiz from firebase
    const [quiz, setQuiz] = useState([]);
    //State when get API from firebase
    //State when get API from firebase
    const quizCollectionRef = collection(db, 'quiz');
    //Firebase snapShot
    useEffect(() => {
        onSnapshot(quizCollectionRef, (snapshot) => {
            setQuiz(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
        });
    }, []);

    useEffect(() => {
        dispatch(fetchListJob());
    }, []);
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('related-job')}>
                    <div className={cx('related-title')}>Việc làm mới nhất</div>
                    <div className={cx('related-more')}>
                        <Link to={config.routes.recruitmentpage}>
                            <span>Hiển thị thêm</span>
                        </Link>
                    </div>
                </div>
                {jobListData.length ? (
                    <div className={cx('wrapper')}>
                        <Row>
                            {jobListData &&
                                jobListData.slice(0, 16).map((recruitment) => {
                                    return (
                                        <Col
                                            key={recruitment.id}
                                            lg={3}
                                            md={4}
                                            sm={6}
                                        >
                                            <Card
                                                data={recruitment}
                                                saved={
                                                    <ion-icon name="heart-outline"></ion-icon>
                                                }
                                                titleSaved="Lưu tin"
                                            ></Card>
                                        </Col>
                                    );
                                })}
                        </Row>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('related-job')}>
                    <div className={cx('related-title')}>Bài quiz nổi bật</div>
                    <div className={cx('related-more')}>
                        <Link to={config.routes.testuser}>
                            <span>Hiển thị thêm</span>
                        </Link>
                    </div>
                </div>

                <div className={cx('wrapper')}>
                    <Row>
                        {quiz.slice(0, 16).map((quiz, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <CardShowQuiz quiz={quiz}></CardShowQuiz>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
        </Container>
    );
}
