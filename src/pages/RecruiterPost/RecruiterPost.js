import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecruiterPost.module.scss';
import Button from '~/components/Button';
import { AddLogo } from './Addlogo/AddLogo';
import { useState } from 'react';
import { getAllProvinces, getAllDistricts } from '~/helper/geomap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const optionVipData = [
    {
        id: '1',
        name: 'Tin thường',
    },
    {
        id: '2',
        name: 'Tin VIP theo ngày',
    },
    {
        id: '3',
        name: 'Tin VIP theo tháng',
    },
];
function RecruiterPost() {
    const [districtID, setDictricID] = useState('');
    const [checked, setChecked] = useState('');
    // formik data
    const formikRef = useRef(null);
    const dispatch = useDispatch();
    // Lấy dữ liệu Quận
    const handleChangeDictrictID = (dictrictID) => {
        setDictricID(dictrictID);
    };
    // Get values của Quận
    const handleSelectedDistrcit = (e) => {};
    const handleCheckBox = (e) => {
        console.log(e.target.value);
    };
    const handleSubmit = () => {
        console.log(Formik);
    };
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Formik
                    initialValues={{
                        position: '',
                        name: '',
                        amount: '',
                        department: '',
                        location: '',
                        descript: '',
                        require: '',
                        benefit: '',
                    }}
                    onSubmit={() => {
                        handleSubmit();
                    }}
                    validationSchema={Yup.object({
                        position: Yup.string()
                            .required('Vui lòng nhập ô này')
                            .min(20, 'Tiêu đề phải lớn hơn 20 ký tự')
                            .max(70, 'Tiêu đề không được vượt quá 80 ký tự'),
                        name: Yup.string()
                            .required('Vui lòng nhập ô này')
                            .min(20, 'Tiêu đề phải lớn hơn 20 ký tự')
                            .max(70, 'Tiêu đề không được vượt quá 80 ký tự'),
                        amount: Yup.number()
                            .required('Vui lòng nhập ô này')
                            .typeError('Vui lòng nhập số')
                            .min(1, 'Tối thiểu 1 người'),
                        department: Yup.string().required(
                            'Vui lòng nhập ô này',
                        ),
                        location: Yup.string()
                            .required('Vui lòng nhập ô này')
                            .min(10, 'Vui lòng nhập đầy đủ địa chỉ làm việc'),
                        // descript: Yup.string().required('Vui lòng nhập ô này'),
                        // require: Yup.string().required('Vui lòng nhập ô này'),
                        // benefit: Yup.string().required('Vui lòng nhập ô này'),
                    })}
                >
                    <Form>
                        <div className={cx('content-detail')}>
                            <Row>
                                <Col sm={12} md={12} className={'mb-5'}>
                                    <div className={cx('content-input')}>
                                        <div className={cx('detail-name')}>
                                            Vị trí muốn tuyển dụng
                                        </div>
                                        <Field
                                            className={cx('input-text')}
                                            name="position"
                                            type="text"
                                            placeholder="Nhập vị trí bạn muốn tuyển"
                                        />
                                        {/* <Input primary name="position" /> */}
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="position" />
                                    </p>
                                </Col>
                                <Col sm={12} md={12} className={'mb-5'}>
                                    <div className={cx('content-input')}>
                                        <div className={cx('detail-name')}>
                                            Tên công ty
                                        </div>
                                        <Field
                                            className={cx('input-text')}
                                            name="name"
                                            type="text"
                                            placeholder="Nhập tên công ty của bạn"
                                        />
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="name" />
                                    </p>
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
                                        <Field
                                            className={cx('input-text')}
                                            name="amount"
                                            type="text"
                                            placeholder="Số lượng cần tuyển"
                                        />
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="amount" />
                                    </p>
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
                                        <Field
                                            className={cx('input-text')}
                                            name="department"
                                            type="text"
                                            placeholder="Nhập vị trí muốn tuyển dụng"
                                        />
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="department" />
                                    </p>
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
                                            onSelectedValue={
                                                handleSelectedDistrcit
                                            }
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
                                        <Field
                                            className={cx('input-text')}
                                            name="location"
                                            type="text"
                                            placeholder="Ví dụ: Tầng 6, số 20 Ông Ích Khiêm, Hải Châu, Đà Nẵng"
                                        />
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="location" />
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} className={'mb-5'}>
                                    <div className={cx('content-input')}>
                                        <div className={cx('detail-name')}>
                                            Nhập mô tả công việc
                                        </div>
                                        <textarea name="descript"></textarea>
                                    </div>

                                    <p className={cx('message')}>
                                        <ErrorMessage name="descript" />
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} className={'mb-5'}>
                                    <div className={cx('content-input')}>
                                        <div className={cx('detail-name')}>
                                            Yêu cầu ứng viên
                                        </div>
                                        <textarea name="require"></textarea>
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="require" />
                                    </p>
                                </Col>
                            </Row>
                            {/* Input job detail textarea */}
                            <Row>
                                <Col sm={12} md={12} className={'mb-5'}>
                                    <div className={cx('content-input')}>
                                        <div className={cx('detail-name')}>
                                            Quyền lợi
                                        </div>
                                        <textarea name="benefit"></textarea>
                                    </div>
                                    <p className={cx('message')}>
                                        <ErrorMessage name="benefit" />
                                    </p>
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
                                            <Input
                                                type="checkbox"
                                                checkbox
                                                value="normal"
                                                onChange={handleCheckBox}
                                            />
                                        </div>
                                        <span className={cx('type-post')}>
                                            Tin thường
                                        </span>
                                    </div>
                                    <div className={cx('type-days')}>
                                        <span>
                                            * Tin thường phải chờ để được kiểm
                                            duyệt trước khi hiển thị, thường sẽ
                                            mất từ 5 phút đến 1 tiếng, tuỳ thuộc
                                            vào lượng tin đăng trong ngày
                                            <br />
                                            * Tin thường sẽ có thời gian hiển
                                            thị là 30 ngày
                                            <br />* Sẽ bị trôi nhanh do có nhiều
                                            tin đăng trong ngày
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('content-input')}>
                                <div className={cx('detail-name')}></div>
                                <div className={cx('type-normal')}>
                                    <div className={cx('type-name')}>
                                        <div className={cx('checkbox')}>
                                            <Input
                                                type="checkbox"
                                                checkbox
                                                value="vip"
                                                onChange={handleCheckBox}
                                            />
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
                                            <Input
                                                type="checkbox"
                                                checkbox
                                                value="special"
                                                onChange={handleCheckBox}
                                            />
                                        </div>
                                        <span className={cx('type-post')}>
                                            Tin VIP theo tháng
                                        </span>
                                    </div>
                                    <div className={cx('type-vip-special')}>
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
                                Tôi cam kết thông tin mô tả về việc làm là thật
                                và tuân thủ các quy tắc của JobCare.vn
                            </div>
                        </div>
                        <div className={cx('submit-btn')}>
                            <div className={cx('btn-right')}>
                                <Button saveInput>Lưu nháp</Button>
                                <Button
                                    primary
                                    onClick={() => {
                                        handleSubmit();
                                    }}
                                >
                                    Đăng bài
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </Container>
        </div>
    );
}

export default RecruiterPost;
