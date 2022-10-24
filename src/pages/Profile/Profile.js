import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '~/components/Button';
import { AddLogo } from '../RecruiterPost/Addlogo/AddLogo';
import ColComp1 from '~/components/Col/Col1';
import Row from 'react-bootstrap/Row';
import ColComp2 from '~/components/Col/Col2';
import { FormInput } from '../RecruiterPost/Input/Input';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <Container>
            <div className={cx('container')}>
                <div className={cx('avatar')}>
                    <AddLogo></AddLogo>
                </div>
                <div className={cx('infor')}>
                    <div className={cx('infor-header')}>TRANG CÁ NHÂN</div>
                    <div className={cx('infor-content')}>
                        <Row>
                            <ColComp2>
                                <div className={cx('infor-set', 'name')}>
                                    <h3>Tên người dùng</h3>
                                    <FormInput
                                        placeholder="Văn Đông"
                                        header
                                    ></FormInput>
                                </div>
                            </ColComp2>
                            <ColComp2>
                                <div className={cx('infor-set', 'email')}>
                                    <h3>Email</h3>
                                    <FormInput
                                        placeholder="dongpham21082001@gmail.com"
                                        header
                                    ></FormInput>
                                </div>{' '}
                            </ColComp2>

                            <ColComp2>
                                <div className={cx('infor-set', 'phone')}>
                                    <h3>Số điện thoại</h3>
                                    <FormInput
                                        placeholder="0853390931"
                                        header
                                    ></FormInput>
                                </div>
                            </ColComp2>

                            <ColComp2>
                                <div className={cx('infor-set', 'birth')}>
                                    <h3>Ngày sinh</h3>
                                    <FormInput
                                        placeholder="21/08/2001"
                                        header
                                    ></FormInput>
                                </div>
                            </ColComp2>

                            <ColComp2>
                                <div className={cx('infor-set', 'gender')}>
                                    <h3>Giới tính</h3>
                                    <FormInput
                                        placeholder="Nam"
                                        header
                                    ></FormInput>
                                </div>
                            </ColComp2>

                            <ColComp2>
                                <div className={cx('infor-set', 'edu')}>
                                    <h3>Trình độ học vấn</h3>
                                    <FormInput
                                        placeholder="Đại học"
                                        header
                                    ></FormInput>
                                </div>
                            </ColComp2>
                        </Row>
                    </div>
                    <div className={cx('descript')}>
                        <h3>Mô tả về bạn</h3>
                        <FormInput discript></FormInput>
                    </div>
                </div>
            </div>
            <div className={cx('submit-btn')}>
                <Button saveInput>Sửa thông tin</Button>
            </div>
        </Container>
    );
}

export default Profile;
