import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import styles from './BoxHeader.module.scss';
import DescriptDetail from '~/pages/RecruitmentDetail/RecruitDetail/DescriptDetail';
import RelatedJob from '../RelatedJob/RelatedJob';
import Button from '~/components/Button';

window.scroll = function () {
    console.log(document.body.scroll);
};

window.scroll = function () {
    console.log(document.body.scroll);
};

const cx = classNames.bind(styles);
export default function BoxHeader({ data, to }) {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('box')}>
                    {/* <div className={cx('title')}>{data?.title}</div> */}
                    <div className={cx('box-left')}>
                        <div className={cx('title')}>
                            <h2>
                                Tuyển thực tập sinh lập trình website (FrontEnd)
                            </h2>
                        </div>
                        <div className={cx('company')}>
                            <h3>Công ty công nghệ BAP</h3>
                        </div>
                        <div className={cx('time')}>
                            <ion-icon name="time-outline"></ion-icon>
                            <span>Hạn nộp hồ sơ: {data?.time}</span>
                        </div>
                    </div>
                    <div className={cx('box-logo')}>
                        <img src={images.logoL} alt="" />
                    </div>
                </div>
                <div className={cx('content-detail')}>
                    <div className={cx('recruitment-detail')}>
                        <h1>Chi tiết tuyển dụng</h1>
                        <div className={cx('detail')}>
                            <div className={cx('detail-require')}>
                                <Row>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="cash-outline"></ion-icon>
                                            <span>Mức lương</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Từ 15-20 triệu
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="people-outline"></ion-icon>
                                            <span>Số lượng người</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            2
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <span>Hình thức làm việc</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Toàn thời gian
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="female-outline"></ion-icon>
                                            <span>Giới tính</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Không yêu cầu
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="podium-outline"></ion-icon>
                                            <span>Cấp bậc</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Fresher
                                        </span>
                                    </Col>
                                    <Col md={6} className={'mb-5'}>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="accessibility-outline"></ion-icon>
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
                            <h2 className={cx('adress')}>
                                <ion-icon name="location-outline"></ion-icon>
                                Địa điểm làm việc
                            </h2>
                            <span className={cx('address-detail')}>
                                Đà Nẵng, 47 Bạch Đằng - Hải Châu
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
                                    >
                                        Ứng tuyển ngay
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('time')}>
                                <ion-icon name="time-outline"></ion-icon>
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
                <RelatedJob></RelatedJob>
            </div>
        </Container>
    );
}
