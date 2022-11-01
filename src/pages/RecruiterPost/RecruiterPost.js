import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecruiterPost.module.scss';
import Button from '~/components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AddLogo } from './Addlogo/AddLogo';
// import { FormInput } from '../RecruiterPost/Input/Input';
import Input from '~/components/Input/Input/Input';
import DropDown from '~/components/Input/DropDown/DropDown';

const cx = classNames.bind(styles);
const mucluongData = [
    {
        value: '101',
        name: 'Thoả thuận',
    },
    {
        value: '102',
        name: 'Tối thiểu',
    },
    {
        value: '103',
        name: 'Tối đa',
    },
];
const gioitinhData = [
    {
        value: '201',
        name: 'Nam',
    },
    {
        value: '202',
        name: 'Nữ',
    },
    {
        value: '203',
        name: 'Không yêu cầu',
    },
];
const hinhthucData = [
    {
        value: '301',
        name: 'Toàn thời gian',
    },
    {
        value: '302',
        name: 'Bán thời gian',
    },
    {
        value: '303',
        name: 'Linh hoạt',
    },
];
const kinhnghiemData = [
    {
        value: '401',
        name: 'Không yêu cầu',
    },
    {
        value: '402',
        name: 'Hơn 6 tháng',
    },
    {
        value: '403',
        name: 'Hơn 1 năm',
    },
    {
        value: '404',
        name: 'Hơn 2 năm',
    },
    {
        value: '405',
        name: 'Hơn 3 năm',
    },
    {
        value: '406',
        name: 'Hơn 4 năm',
    },
    {
        value: '407',
        name: 'Hơn 5 năm',
    },
    {
        value: '408',
        name: 'Hơn 6 năm',
    },
    {
        value: '409',
        name: 'Hơn 7 năm',
    },
    {
        value: '410',
        name: 'Hơn 8 năm',
    },
    {
        value: '411',
        name: 'Hơn 9 năm',
    },
    {
        value: '408',
        name: 'Trên 10 năm',
    },
];
const vipDateData = [
    {
        value: '500',
        name: 'Loại VIP',
    },
    {
        value: '501',
        name: 'VIP 3 / 10.000đ / ngày',
    },
    {
        value: '502',
        name: 'VIP 2 / 20.000đ / ngày',
    },
    {
        value: '503',
        name: 'VIP 1 / 30.000đ / ngày',
    },
];
const dateData = [
    {
        value: '600',
        name: 'Số ngày',
    },
    {
        value: '601',
        name: '1',
    },
    {
        value: '602',
        name: '2',
    },
    {
        value: '603',
        name: '3',
    },
    {
        value: '604',
        name: '4',
    },
    {
        value: '605',
        name: '5',
    },
    {
        value: '606',
        name: '6',
    },
    {
        value: '607',
        name: '7',
    },
    {
        value: '608',
        name: '8',
    },
    {
        value: '609',
        name: '9',
    },
    {
        value: '610',
        name: '10',
    },
    {
        value: '611',
        name: '11',
    },
    {
        value: '612',
        name: '12',
    },
    {
        value: '613',
        name: '13',
    },
    {
        value: '614',
        name: '14',
    },
    {
        value: '615',
        name: '15',
    },
    {
        value: '616',
        name: '16',
    },
    {
        value: '617',
        name: '617',
    },
    {
        value: '618',
        name: '18',
    },
    {
        value: '619',
        name: '19',
    },
    {
        value: '620',
        name: '20',
    },
];
const vipMonthData = [
    {
        value: '700',
        name: 'Loại VIP',
    },
    {
        value: '701',
        name: 'VIP 3 / 250.000đ / tháng',
    },
    {
        value: '702',
        name: 'VIP 2 / 5500.000đ / tháng',
    },
    {
        value: '703',
        name: 'VIP 1 / 800.000đ / tháng',
    },
];
function RecruiterPost() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('post-header')}>
                        <div className={cx('content-header')}>
                            <Input
                                type="text"
                                placeholder="NHẬP VỊ TRÍ MUỐN TUYỂN DỤNG"
                            />
                        </div>
                        <div className={cx('content-header')}>
                            <Input placeholder="NHẬP TÊN CÔNG TY" />
                        </div>
                    </div>
                    <div className={cx('content-avatar')}>
                        <AddLogo />
                    </div>
                </div>
                <div className={cx('content-detail')}>
                    <Row>
                        <Col md={6} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>
                                    Nhập mức lương
                                </div>
                                <DropDown
                                    data={mucluongData}
                                    className={cx('dropdown-detail')}
                                />
                            </div>
                        </Col>
                        <Col md={6} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>
                                    Số lượng người
                                </div>
                                <Input primary></Input>
                            </div>
                        </Col>
                        <Col md={6} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>
                                    Hình thức làm việc
                                </div>
                                <DropDown
                                    data={hinhthucData}
                                    className={cx('dropdown-detail')}
                                />
                            </div>
                        </Col>
                        <Col md={6} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>
                                    Giới tính
                                </div>
                                <DropDown
                                    data={gioitinhData}
                                    className={cx('dropdown-detail')}
                                />
                            </div>
                        </Col>
                        <Col md={6} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>Vị trí</div>
                                <Input primary></Input>
                            </div>
                        </Col>
                        <Col md={6} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>
                                    Kinh nghiệm
                                </div>
                                <DropDown
                                    data={kinhnghiemData}
                                    className={cx('dropdown-detail')}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} className={'mb-5'}>
                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}>
                                    Địa chỉ làm việc
                                </div>
                                <Input
                                    primary
                                    placeholder="Ví dụ: Tầng 6, số 20 Ông Ích Khiêm, Hải Châu, Đà Nẵng"
                                />
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
                    {/* Input job detail textarea */}
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
                    {/* Type of p */}
                    <div className={cx('content-input')}>
                        <div className={cx('detail-name')}>
                            Hình thức đăng tin
                        </div>
                        <div className={cx('type-normal')}>
                            <div className={cx('type-name')}>
                                <input type="checkbox" />
                                <span className={cx('type-post')}>Tin thường</span>
                            </div>
                            <div className={cx('type-days')}>
                                <span>
                                    * Tin thường phải chờ để được kiểm duyệt
                                    trước khi hiển thị, thường sẽ mất từ 5 phút
                                    đến 1 tiếng, tuỳ thuộc vào lượng tin đăng
                                    trong ngày
                                    <br />
                                    * Tin thường sẽ có thời gian hiển thị là 30
                                    ngày
                                    <br />* Sẽ bị trôi nhanh do có nhiều tin
                                    đăng trong ngày
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('content-input')}>
                        <div className={cx('detail-name')}></div>
                        <div className={cx('type-normal')}>
                            <div className={cx('type-name')}>
                                <input type="checkbox" />
                                <span className={cx('type-post')}>Tin VIP theo ngày</span>
                            </div>
                            <div className={cx('type-vip')}>
                                <DropDown
                                    data={vipDateData}
                                    className={cx('select-vip')}
                                />
                                <span className={cx('multip')}>x</span>
                                <DropDown
                                    data={dateData}
                                    className={cx('select-vip')}
                                />

                                <span className={cx('cost')}>
                                    =
                                    <span className={cx('cost-total')}>
                                        300.000đ
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-input')}>
                        <div className={cx('detail-name')}></div>
                        <div className={cx('type-normal')}>
                            <div className={cx('type-name')}>
                                <input type="checkbox" />
                                <span className={cx('type-post')}>Tin VIP theo tháng</span>
                            </div>
                            <div className={cx('type-vip')}>
                                <DropDown data={vipMonthData} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content-rule')}>
                    <Input type="checkbox" checkbox />
                    <div className={cx('rule')}>
                        Tôi cam kết thông tin mô tả về việc làm là thật và tuân
                        thủ các quy tắc của JobCare.vn
                    </div>
                </div>
                <div className={cx('submit-btn')}>
                    <div className={cx('btn-right')}>
                        <Button saveInput>Lưu nháp</Button>
                        <Button primary>Đăng bài</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default RecruiterPost;
