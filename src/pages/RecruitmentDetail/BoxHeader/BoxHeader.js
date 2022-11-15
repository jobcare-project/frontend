import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BoxHeader.module.scss';
import DescriptDetail from '~/pages/RecruitmentDetail/RecruitDetail/DescriptDetail';
import images from '~/assets/images';
import Button from '~/components/Button';
import Modal from '~/pages/Profile/Modal/Modal';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// window.scroll = function () {
//     console.log(document.body.scroll);
// };

// window.scroll = function () {
//     console.log(document.body.scroll);
// };

const cx = classNames.bind(styles);

export default function BoxHeader({ data, to }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('box')}>
                    {/* <div className={cx('title')}>{data?.title}</div> */}
                    <div className={cx('box-left')}>
                        <div className={cx('title')}>
                            <h2 className={cx('title-header')}>
                                Tuyển thực tập sinh lập trình website (FrontEnd)
                                <span>
                                    <ion-icon
                                        name="checkmark-circle-outline"
                                        className={cx('check-icon')}
                                    ></ion-icon>
                                </span>
                            </h2>
                        </div>
                        <h3 className={cx('company-name')}>
                            Công ty công nghệ BAP
                        </h3>
                        <div className={cx('time')}>
                            <span>
                                <ion-icon
                                    name="time-outline"
                                    className={cx('time-icon')}
                                ></ion-icon>
                            </span>
                            <span>Hạn nộp hồ sơ: {data?.time}</span>
                        </div>
                    </div>
                    <div className={cx('box-logo')}>
                        <img src={images.CV} alt="" />
                    </div>
                </div>
                <div className={cx('content-detail')}>
                    <div className={cx('recruitment-detail')}>
                        <div className={cx('detail')}>
                            <div className={cx('detail-require')}>
                                <h2 className={cx('adress')}>
                                    Chi tiết tuyển dụng
                                </h2>
                                <Row>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <span>
                                                <ion-icon name="cash-outline"></ion-icon>
                                            </span>
                                            <span>Mức lương</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Từ 15-20 triệu
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <span>
                                                <ion-icon name="people-outline"></ion-icon>
                                            </span>
                                            <span>Số lượng người</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            2
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <span>
                                                <ion-icon name="time-outline"></ion-icon>
                                            </span>
                                            <span>Hình thức làm việc</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Toàn thời gian
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <span>
                                                <ion-icon name="female-outline"></ion-icon>
                                            </span>
                                            <span>Giới tính</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Không yêu cầu
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <span>
                                                <ion-icon name="podium-outline"></ion-icon>
                                            </span>
                                            <span>Cấp bậc</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Fresher
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <span>
                                                <ion-icon name="accessibility-outline"></ion-icon>
                                            </span>
                                            <span>Kinh nghiệm</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Không yêu cầu
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={cx('location')}>
                            <h2 className={cx('adress')}>Địa điểm làm việc</h2>
                            <span className={cx('address-detail')}>
                                - Đà Nẵng, 47 Bạch Đằng - Hải Châu
                            </span>
                        </div>
                        <div className={cx('content-post')}>
                            <DescriptDetail />
                            <div className={cx('mothod-title')}>
                                <h2>Cách thức ứng tuyển</h2>
                            </div>
                            <div className={cx('btn-post')}>
                                <div className={cx('btn-save')}>
                                    <Button rounded>Lưu tin</Button>
                                </div>
                                <div className={cx('btn-apply')}>
                                    <Button
                                        primary
                                        className={cx('btn-submit')}
                                        onClick={() => {
                                            setModalOpen(true);
                                        }}
                                    >
                                        Ứng tuyển ngay
                                    </Button>
                                    {modalOpen && (
                                        <Modal setOpenModal={setModalOpen} />
                                    )}
                                </div>
                            </div>
                            <div className={cx('time')}>
                                <span>
                                    <ion-icon name="time-outline"></ion-icon>
                                </span>
                                <span>Hạn nộp hồ sơ: {data?.time}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('detail-ads')}>
                        <Link className={cx('link')} to={to}>
                            <img src={images.CV} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
