import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecruiterPost.module.scss';
import Button from '~/components/Button';
import { AddLogo } from './Addlogo/AddLogo';
import { useState } from 'react';
import { getAllProvinces, getAllDistricts } from '~/helper/geomap';
import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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

const checkboxData = [
    {
        id: 1,
        name: 'Tin thường',
    },
    {
        id: 2,
        name: 'Tin VIP theo ngày',
    },
    {
        id: 3,
        name: 'Tin VIP theo tháng',
    },
];
function RecruiterPost() {
    // const [position, setPosition] = useState('');
    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');
    // const [department, setDepartment] = useState('');
    // const [location, setLocation] = useState('');
    // const [descript, setDescript] = useState('');
    // const [require, setRequire] = useState('');
    // const [benefit, setBenefit] = useState('');
    const [districtID, setDictricID] = useState('');

    // Lấy dữ liệu Quận
    const handleChangeDictrictID = (dictrictID) => {
        setDictricID(dictrictID);
    };
    // Get values của Quận
    const handleSelectedDistrcit = (e) => {};
    const onSubmitPost = (values) => {
        console.log(values);
    };
    // const handleInput = (e) => {
    //     setPosition(e.target.value);
    // };

    const formik = useFormik({
        initialValues: {
            position: '',
            name: '',
            amount: '',
            department: '',
            location: '',
            descript: '',
            require: '',
            benefit: '',
        },
        validationSchema: Yup.object({
            position: Yup.string()
                .required('Required')
                .min(20, 'Tiêu đề phải lớn hơn 30 ký tự')
                .max(70, 'Tiêu đề không được vượt quá 80 ký tự'),
            name: Yup.string()
                .required('Required')
                .min(30, 'Tiêu đề phải lớn hơn 30 ký tự')
                .max(70, 'Tiêu đề không được vượt quá 80 ký tự'),
            amount: Yup.string().required('Required'),
            department: Yup.string().required('Required'),
            location: Yup.string()
                .required('Required')
                .min(10, 'Vui lòng nhập đầy đủ địa chỉ làm việc'),
            descript: Yup.string().required('Required'),
            require: Yup.string().required('Required'),
            benefit: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            onSubmitPost(values);
        },
    });

    return (
        <Container>
            <div className={cx('wrapper')}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={cx('content-detail')}>
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Vị trí muốn tuyển dụng
                                    </div>

                                    <Input
                                        primary
                                        name="position"
                                        value={formik.values.position}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                    </p>
                                )}
                            </Col>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Tên công ty
                                    </div>
                                    <Input
                                        primary
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                    </p>
                                )}
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Nhập mức lương
                                    </div>
                                    <DropDown
                                        data={mucluongData}
                                        className={cx('dropdown-detail')}
                                        title="Mức lương"
                                    />
                                </div>
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Số lượng người
                                    </div>
                                    <Input
                                        primary
                                        name="amount"
                                        value={formik.values.amount}
                                        onChange={formik.handleChange}
                                    ></Input>
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                    </p>
                                )}
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Hình thức làm việc
                                    </div>
                                    <DropDown
                                        data={hinhthucData}
                                        className={cx('dropdown-detail')}
                                        title="Chọn hình thức"
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
                                        title="Giới tính"
                                    />
                                </div>
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Vị trí
                                    </div>
                                    <Input
                                        primary
                                        name="department"
                                        value={formik.values.department}
                                        onChange={formik.handleChange}
                                    ></Input>
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                    </p>
                                )}
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Kinh nghiệm
                                    </div>
                                    <DropDown
                                        data={kinhnghiemData}
                                        className={cx('dropdown-detail')}
                                        title="Kinh nghiệm"
                                    />
                                </div>
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Thành phố
                                    </div>
                                    <DropDown
                                        title=" Thành phố"
                                        onChangeDictrictID={
                                            handleChangeDictrictID
                                        }
                                        data={getAllProvinces()}
                                        className={cx('dropdown-detail')}
                                    />
                                </div>
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Quận/Huyện
                                    </div>
                                    <DropDown
                                        title="Quận/Huyện"
                                        data={
                                            districtID &&
                                            getAllDistricts(districtID)
                                        }
                                        className={cx('dropdown-detail')}
                                        onSelectedValue={handleSelectedDistrcit}
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
                                        name="location"
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.location}
                                    </p>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Nhập mô tả công việc
                                    </div>
                                    <textarea
                                        name="descript"
                                        value={formik.values.descript}
                                        onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                    </p>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Yêu cầu ứng viên
                                    </div>
                                    <textarea
                                        name="require"
                                        value={formik.values.require}
                                        onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                        onChange={formik.handleChange}
                                    </p>
                                )}
                            </Col>
                        </Row>
                        {/* Input job detail textarea */}
                        <Row>
                            <Col sm={12} md={12} className={'mb-5'}>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}>
                                        Quyền lợi
                                    </div>
                                    <textarea
                                        name="benefit"
                                        value={formik.values.benefit}
                                        onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                                {formik.errors.position && (
                                    <p className={cx('message')}>
                                        {formik.errors.position}
                                    </p>
                                )}
                            </Col>
                        </Row>
                        {/* Type of p */}
                        <div className={cx('content-input')}>
                            <div className={cx('detail-name')}>
                                Hình thức đăng tin
                            </div>
                            <div className={cx('type-normal')}>
                                <div className={cx('type-name')}>
                                    <div className={cx('checkbox')}>
                                        <Input type="checkbox" checkbox />
                                    </div>
                                    <span className={cx('type-post')}>
                                        Tin thường
                                    </span>
                                </div>
                                <div className={cx('type-days')}>
                                    <span>
                                        * Tin thường phải chờ để được kiểm duyệt
                                        trước khi hiển thị, thường sẽ mất từ 5
                                        phút đến 1 tiếng, tuỳ thuộc vào lượng
                                        tin đăng trong ngày
                                        <br />
                                        * Tin thường sẽ có thời gian hiển thị là
                                        30 ngày
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
                                    <div className={cx('checkbox')}>
                                        <Input type="checkbox" checkbox />
                                    </div>
                                    <span className={cx('type-post')}>
                                        Tin VIP theo ngày
                                    </span>
                                </div>
                                <div className={cx('type-vip')}>
                                    <DropDown
                                        data={vipDateData}
                                        className={cx('select-vip')}
                                        title="Loại VIP"
                                    />
                                    <span className={cx('multip')}>x</span>
                                    <DropDown
                                        data={dateData}
                                        className={cx('select-vip')}
                                        title="Số ngày"
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
                                    <div className={cx('checkbox')}>
                                        <Input type="checkbox" checkbox />
                                    </div>
                                    <span className={cx('type-post')}>
                                        Tin VIP theo tháng
                                    </span>
                                </div>
                                <div className={cx('type-vip')}>
                                    <DropDown
                                        data={vipMonthData}
                                        title="Loại VIP"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-rule')}>
                        <div className={cx('checkbox')}>
                            <Input type="checkbox" checkbox />
                        </div>
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
                </form>
            </div>
        </Container>
    );
}

export default RecruiterPost;
