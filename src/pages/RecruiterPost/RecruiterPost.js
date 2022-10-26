import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecruiterPost.module.scss';
import Button from '~/components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AddLogo } from './Addlogo/AddLogo';
import { FormInput } from '../RecruiterPost/Input/Input';
const cx = classNames.bind(styles);
function RecruiterPost() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('content-title')}>
                            <div className={cx('content-position')}>
                                <FormInput
                                    header
                                    placeholder="NHẬP VỊ TRÍ MUỐN TUYỂN DỤNG"
                                ></FormInput>
                            </div>
                            <div className={cx('content-position')}>
                                <FormInput
                                    header
                                    placeholder="NHẬP TÊN CÔNG TY"
                                ></FormInput>
                            </div>
                        </div>
                        <div className={cx('content-avatar')}>
                            <AddLogo />
                        </div>
                    </div>
                    <div className={cx('content-detail')}>
                        <Row>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Nhập mức lương
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Số lượng người
                                    </div>
                                    <FormInput primary></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Hình thức làm việc
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Giới tính
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Cấp bậc
                                    </div>
                                    <FormInput primary></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Kinh nghiệm
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Tỉnh thành
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Quận/Huyện
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Địa chỉ
                                    </div>
                                    <FormInput primary></FormInput>
                                </div>
                            </Col>

                            <Col>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Đường phố
                                    </div>
                                    <FormInput
                                        type="select"
                                        primary
                                    ></FormInput>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Nhập mô tả công việc
                                    </div>
                                    <textarea></textarea>
                                </div>
                                {/* <FormInput type="select"></FormInput> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Yêu cầu ứng viên
                                    </div>
                                    <textarea></textarea>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Quyền lợi
                                    </div>
                                    <textarea></textarea>
                                </div>
                            </Col>
                        </Row>
                        <div className={cx('content-input')}>
                            <div className={cx('detail-name')}>
                                Hình thức đăng tin
                            </div>
                            <div className={cx('type-normal')}>
                                <div className={cx('type-post')}>
                                    <div className={cx('type-name')}>
                                        <input type="checkbox" />
                                        <span>Tin thường</span>
                                    </div>
                                    <div className={cx('type-days')}>
                                        <FormInput
                                            type="select"
                                            selected
                                        ></FormInput>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-input')}>
                            <div className={cx('detail-name')}></div>
                            <div className={cx('type-normal')}>
                                <div className={cx('type-post')}>
                                    <div className={cx('type-name')}>
                                        <input type="checkbox" />
                                        <span>Tin VIP theo ngày</span>
                                    </div>
                                    <div className={cx('type-days')}>
                                        <FormInput
                                            type="select"
                                            selected
                                        ></FormInput>
                                        <span>x</span>
                                        <FormInput
                                            type="select"
                                            selected
                                        ></FormInput>
                                        <span>=</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-input')}>
                            <div className={cx('detail-name')}></div>
                            <div className={cx('type-normal')}>
                                <div className={cx('type-post')}>
                                    <div className={cx('type-name')}>
                                        <input type="checkbox" />
                                        <span>Tin VIP theo tháng</span>
                                    </div>
                                    <div className={cx('type-days')}>
                                        <FormInput
                                            type="select"
                                            selected
                                        ></FormInput>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-rule')}>
                        <FormInput type="checkbox" />
                        <div className={cx('rule')}>
                            Tôi cam kết thông tin mô tả về việc làm là thật và
                            tuân thủ các quy tắc của JobCare.vn
                        </div>
                    </div>
                    <div className={cx('submit-btn')}>
                        <div className={cx('btn-right')}>
                            <Button saveInput>Lưu nháp</Button>
                            <Button primary>Đăng bài</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default RecruiterPost;
