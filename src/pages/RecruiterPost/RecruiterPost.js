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
import { useMemo } from 'react';
const cx = classNames.bind(styles);
const mucluongData = [
    {
        value: '101',
        name: 'Thoả thuận',
    },
    {
        value: '102',
        name: 'Triệu/tháng',
    },
    {
        value: '103',
        name: 'Từ',
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
        value: '10000',
        name: 'VIP 3 / 10.000đ / ngày',
    },
    {
        value: '20000',
        name: 'VIP 2 / 20.000đ / ngày',
    },
    {
        value: '30000',
        name: 'VIP 1 / 30.000đ / ngày',
    },
];
const dateData = [
    {
        value: '0',
        name: 'Số ngày',
    },
    {
        value: '1',
        name: '1',
    },
    {
        value: '2',
        name: '2',
    },
    {
        value: '3',
        name: '3',
    },
    {
        value: '4',
        name: '4',
    },
    {
        value: '5',
        name: '5',
    },
    {
        value: '6',
        name: '6',
    },
    {
        value: '7',
        name: '7',
    },
    {
        value: '8',
        name: '8',
    },
    {
        value: '9',
        name: '9',
    },
    {
        value: '10',
        name: '10',
    },
    {
        value: '11',
        name: '11',
    },
    {
        value: '12',
        name: '12',
    },
    {
        value: '13',
        name: '13',
    },
    {
        value: '14',
        name: '14',
    },
    {
        value: '15',
        name: '15',
    },
    {
        value: '16',
        name: '16',
    },
    {
        value: '17',
        name: '17',
    },
    {
        value: '18',
        name: '18',
    },
    {
        value: '19',
        name: '19',
    },
    {
        value: '20',
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
    const [textArea, setTextArea] = useState('');
    const [selectForm, setSelectForm] = useState({
        salary: '',
        gender: '',
        experience: '',
        city: '',
        district: '',
        typeWork: '',
    });

    const [checkboxRule, setCheckboxRule] = useState({
        rule: false,
    });
    const [checkboxForm, setCheckboxForm] = useState({});

    const [quantityVipDay, setQuantityVipDay] = useState({
        typeVipDay: '',
        quantiyDay: '',
    });

    const handleChangeVipValues = (value, name, nameSelect) => {
        setQuantityVipDay((prev) => {
            return {
                ...prev,
                [nameSelect]: value,
            };
        });
    };
    const totalQuantityVipDays = useMemo(() => {
        return +quantityVipDay.quantiyDay * +quantityVipDay.typeVipDay;
    }, [quantityVipDay]);

    // formik data
    const formikRef = useRef(null);
    const dispatch = useDispatch();
    // Lấy dữ liệu Quận
    const handleChangeSelect = (value, name, nameSelect) => {
        if (nameSelect === 'city') {
            setDictricID(value);
        }
        setSelectForm((prev) => {
            return { ...prev, [nameSelect]: name };
        });
        console.log(name);
    };
    // Get values của Quận
    const handleCheckBox = (e) => {
        // console.log(e.target.value);
    };
    const handleSubmit = () => {
        console.log(Formik);
    };
    // check box rule
    const handleChangeCheckboxRule = () => {
        setCheckboxRule((prev) => {
            return {
                ...prev,
                rule: !prev.rule,
            };
        });
    };
    const handleChangeCheckbox = () => {
        setCheckboxForm((prev, id) => {
            return {
                ...prev,
                ruleVip: !prev.ruleVip,
            };
        });
    };
    console.log({ checkboxForm });
    console.log({ checkboxRule });
    const handleTextChange = (e) => {
        setTextArea(e.target.value);
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
                        // descript: '',
                        // require: '',
                        // benefit: '',
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
                        salary: Yup.number()
                            .required('Vui lòng nhập ô này')
                            .typeError('Vui lòng nhập số')
                            .min(1, 'Tối thiểu 1 người'),
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
                        <div className={cx('title-header')}>
                            Tạo bài tuyển dụng mới
                        </div>
                        <div className={cx('post-title')}>Thông tin cơ bản</div>
                        <div className={cx('title-post')}>
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
                                            <div
                                                className={cx('salary-detail')}
                                            >
                                                <Field
                                                    className={cx(
                                                        'input-salary',
                                                    )}
                                                    name="salary"
                                                    type="text"
                                                    placeholder="Nhập mức lương"
                                                />
                                                <div
                                                    className={cx(
                                                        'content-salary',
                                                    )}
                                                >
                                                    <DropDown
                                                        onChangeSelect={(
                                                            value,
                                                            name,
                                                        ) =>
                                                            handleChangeSelect(
                                                                value,
                                                                name,
                                                                'salary',
                                                            )
                                                        }
                                                        data={mucluongData}
                                                        className={cx(
                                                            'dropdown-detail',
                                                        )}
                                                        title="Mức lương"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className={cx('message')}>
                                            <ErrorMessage name="salary" />
                                        </p>
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
                                                onChangeSelect={(value, name) =>
                                                    handleChangeSelect(
                                                        value,
                                                        name,
                                                        'typeWork',
                                                    )
                                                }
                                                data={hinhthucData}
                                                className={cx(
                                                    'dropdown-detail',
                                                )}
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
                                                onChangeSelect={(value, name) =>
                                                    handleChangeSelect(
                                                        value,
                                                        name,
                                                        'gender',
                                                    )
                                                }
                                                data={gioitinhData}
                                                className={cx(
                                                    'dropdown-detail',
                                                )}
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
                                                onChangeSelect={(value, name) =>
                                                    handleChangeSelect(
                                                        value,
                                                        name,
                                                        'experience',
                                                    )
                                                }
                                                data={kinhnghiemData}
                                                className={cx(
                                                    'dropdown-detail',
                                                )}
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
                                                onChangeSelect={(value, name) =>
                                                    handleChangeSelect(
                                                        value,
                                                        name,
                                                        'city',
                                                    )
                                                }
                                                data={getAllProvinces()}
                                                className={cx(
                                                    'dropdown-detail',
                                                )}
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
                                                data={getAllDistricts(
                                                    districtID,
                                                )}
                                                className={cx(
                                                    'dropdown-detail',
                                                )}
                                                onChangeSelect={(value, name) =>
                                                    handleChangeSelect(
                                                        value,
                                                        name,
                                                        'district',
                                                    )
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
                                            <textarea
                                                name="descript"
                                                onChange={handleTextChange}
                                            ></textarea>
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
                                            <textarea
                                                name="require"
                                                onChange={handleTextChange}
                                            ></textarea>
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
                                            <textarea
                                                name="benefit"
                                                onChange={handleTextChange}
                                            ></textarea>
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
                                    <div className={cx('form-choice')}>
                                        <div className={cx('type-name')}>
                                            <div className={cx('checkbox')}>
                                                <input
                                                    type="radio"
                                                    id="1"
                                                    checked={
                                                        checkboxForm.ruleVip
                                                    }
                                                    onChange={
                                                        handleChangeCheckbox
                                                    }
                                                />
                                            </div>
                                            <span className={cx('type-post')}>
                                                Tin thường
                                            </span>
                                        </div>
                                        <div className={cx('type-days')}>
                                            <span>
                                                * Tin thường phải chờ để được
                                                kiểm duyệt trước khi hiển thị,
                                                thường sẽ mất từ 5 phút đến 1
                                                tiếng, tuỳ thuộc vào lượng tin
                                                đăng trong ngày
                                                <br />
                                                * Tin thường sẽ có thời gian
                                                hiển thị là 30 ngày
                                                <br />* Sẽ bị trôi nhanh do có
                                                nhiều tin đăng trong ngày
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}></div>
                                    <div className={cx('form-choice')}>
                                        <div className={cx('type-name')}>
                                            <div className={cx('checkbox')}>
                                                <input
                                                    type="radio"
                                                    checked={
                                                        checkboxForm.ruleVip
                                                    }
                                                    onChange={
                                                        handleChangeCheckbox
                                                    }
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
                                                onChangeSelect={(value, name) =>
                                                    handleChangeVipValues(
                                                        value,
                                                        name,
                                                        'typeVipDay',
                                                    )
                                                }
                                            />
                                            <span className={cx('multip')}>
                                                x
                                            </span>
                                            <DropDown
                                                data={dateData}
                                                className={cx('select-vip')}
                                                title="Số ngày"
                                                onChangeSelect={(value, name) =>
                                                    handleChangeVipValues(
                                                        value,
                                                        name,
                                                        'quantiyDay',
                                                    )
                                                }
                                            />

                                            <span className={cx('cost')}>
                                                ={totalQuantityVipDays}đ
                                                <span
                                                    className={cx('cost-total')}
                                                ></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('content-input')}>
                                    <div className={cx('detail-name')}></div>
                                    <div className={cx('form-choice')}>
                                        <div className={cx('type-name')}>
                                            <div className={cx('checkbox')}>
                                                <input
                                                    type="radio"
                                                    checked={
                                                        checkboxForm.ruleVip
                                                    }
                                                    onChange={
                                                        handleChangeCheckbox
                                                    }
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
                                <div className={cx('checkbox-rule')}>
                                    {/* <Input type="checkbox" checkbox /> */}
                                    <input
                                        type="checkbox"
                                        checked={checkboxForm.rule}
                                        onChange={handleChangeCheckboxRule}
                                    />
                                </div>
                                <div className={cx('rule')}>
                                    Tôi cam kết thông tin mô tả về việc làm là
                                    thật và tuân thủ các quy tắc của JobCare.vn
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
                        </div>
                    </Form>
                </Formik>
            </Container>
        </div>
    );
}

export default RecruiterPost;
