import React from 'react';
import classNames from 'classnames/bind';
import styles from './Recruiter.module.scss';
import RecruiterPost from '~/pages/Recruiter/RecruiterPost/RecruiterPost';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);
function Recruiter() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col md={6} className={'mb-5'}>
                        <Link to={config.routes.recruiterpost}>
                            <div className={cx('control-block')}>
                                <span className={cx('icon')}>
                                    <ion-icon name="newspaper-outline"></ion-icon>
                                </span>
                                <h3 className={cx('heading')}>
                                    Đăng bài tuyển dụng
                                </h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={6} className={'mb-5'}>
                        <Link to={{ pathname:'postquiz'}} >
                            <div className={cx('control-block')}>
                                <span className={cx('icon')}>
                                    <ion-icon name="reader-outline"></ion-icon>
                                </span>
                                <h3 className={cx('heading')}>
                                    Đăng bài Quizz
                                </h3>
                            </div>
                        </Link>
                    </Col>

                    <Col md={6} className={'mb-5'}>
                        <Link to={config.routes.recruitersaved}>
                            <div className={cx('control-block')}>
                                <span className={cx('icon')}>
                                    <ion-icon name="save-outline"></ion-icon>
                                </span>
                                <h3 className={cx('heading')}>
                                    Tin tuyển dụng của bạn
                                </h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={6} className={'mb-5'}>
                        <Link to={config.routes.showquizrecuiter}>
                            <div className={cx('control-block')}>
                                <span className={cx('icon')}>
                                    <ion-icon name="save-outline"></ion-icon>
                                </span>
                                <h3 className={cx('heading')}>
                                    Bài Quizz của bạn
                                </h3>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Recruiter;
