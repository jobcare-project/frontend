import classNames from 'classnames/bind';
import { Button, Container, Row } from 'react-bootstrap';
import images from '~/assets/images';
import ColComp2 from '../../../components/Col/Col2';
import styles from './BoxHeader.module.scss';
import { Link } from 'react-router-dom';
import DescriptDetail from '~/pages/RecruitmentDetail/RecruitDetail/DescriptDetail';
import RelatedJob from '../RelatedJob/RelatedJob';
import RuleBottom from '~/pages/Home/RuleBottom/RuleBottom';

const cx = classNames.bind(styles);
export default function BoxHeader({ data, to }) {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('box')}>
                    {/* <div className={cx('title')}>{data?.title}</div> */}
                    <div className={cx('box-left')}>
                        <div className={cx('title')}>
                            <h1>
                                Tuyển thực tập sinh lập trình website (FrontEnd)
                            </h1>
                        </div>
                        <div className={cx('company')}>
                            <h4>Công ty công nghệ BAP</h4>
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
                                    <ColComp2>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="cash-outline"></ion-icon>
                                            <span>Mức lương</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Từ 15-20 triệu
                                        </span>
                                    </ColComp2>
                                    <ColComp2>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="people-outline"></ion-icon>
                                            <span>Số lượng người</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            2
                                        </span>
                                    </ColComp2>
                                    <ColComp2>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <span>Hình thức làm việc</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Toàn thời gian
                                        </span>
                                    </ColComp2>
                                    <ColComp2>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="female-outline"></ion-icon>
                                            <span>Giới tính</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Không yêu cầu
                                        </span>
                                    </ColComp2>
                                    <ColComp2>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="podium-outline"></ion-icon>
                                            <span>Cấp bậc</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Fresher
                                        </span>
                                    </ColComp2>
                                    <ColComp2>
                                        <div className={cx('type-work')}>
                                            <ion-icon name="accessibility-outline"></ion-icon>
                                            <span>Kinh nghiệm</span>
                                        </div>
                                        <span className={cx('type-detail')}>
                                            Không yêu cầu
                                        </span>
                                    </ColComp2>
                                </Row>
                            </div>
                        </div>
                        <div className={cx('location')}>
                            <h1 className={cx('adress')}>
                                <ion-icon name="location-outline"></ion-icon>
                                Địa điểm làm việc
                            </h1>
                            <span className={cx('address-detail')}>
                                Đà Nẵng, 47 Bạch Đằng - Hải Châu
                            </span>
                        </div>
                        <div className={cx('content-post')}>
                            <DescriptDetail />
                            <div className={cx('method-apply')}>
                                <div className={cx('mothod-title')}>
                                    <h1>Cách thức ứng tuyển</h1>
                                </div>
                                <div className={cx('btn')}>
                                    <Button primary>Ứng tuyển ngay</Button>
                                    <Button rounded>Lưu tin</Button>
                                </div>
                                <div className={cx('time')}>
                                    <ion-icon name="time-outline"></ion-icon>
                                    <span>Hạn nộp hồ sơ: {data?.time}</span>
                                </div>
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
                <RuleBottom></RuleBottom>
            </div>
        </Container>
    );
}
