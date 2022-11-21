import React from 'react';
import styles from './RelatedJob.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '~/components/Card/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import { fetchListJob } from '~/pages/Home/homeSlice';
const cx = classNames.bind(styles);

export default function RelatedJob() {
    const dispatch = useDispatch();
    const jobListData = useSelector(jobListSelector);

    useEffect(() => {
        dispatch(fetchListJob());
    }, []);
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('related-job')}>
                    <div className={cx('related-title')}>
                        Việc làm liên quan
                    </div>
                    <div className={cx('related-more')}>
                        <Link to="/recruitmentpage/user">
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
                                                repair={
                                                    <ion-icon name="heart-outline"></ion-icon>
                                                }
                                                titlRepair="Lưu tin"
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
        </Container>
    );
}
