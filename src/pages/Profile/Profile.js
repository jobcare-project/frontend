import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '~/components/Button';
import { AddLogo } from '../Recruiter/RecruiterPost/Addlogo/AddLogo';
import Row from 'react-bootstrap/Row';
// import { FormInput } fro../RecruiterPost/Input/Input';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Modal from '../../components/Modal/ModalCv/ModalCv';

const cx = classNames.bind(styles);

function Profile() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <Container>
            <div className={cx('container')}>
                <div c lassName={cx('avatar')}>
                    <AddLogo></AddLogo>
                </div>
                <div className={cx('infor')}>
                    <div className={cx('infor-header')}>TRANG CÁ NHÂN</div>
                    <div className={cx('infor-content')}>
                        <Row>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('infor-set', 'name')}>
                                    <h3>Tên người dùng</h3>
                                    {/* {/* <FormInput discr></FormInput> */}
                                </div>
                            </Col>
                            <Col md={6} className={'mb-5'}>
                                <div className={cx('infor-set', 'email')}>
                                    <h3>Email</h3>
                                    {/* {/* <FormInput discr></FormInput> */}
                                </div>{' '}
                            </Col>

                            <Col md={6} className={'mb-5'}>
                                <div className={cx('infor-set', 'phone')}>
                                    <h3>Số điện thoại</h3>
                                    {/* {/* <FormInput discr></FormInput> */}
                                </div>
                            </Col>

                            <Col md={6} className={'mb-5'}>
                                <div className={cx('infor-set', 'birth')}>
                                    <h3>Ngày sinh</h3>
                                    {/* {/* <FormInput discr></FormInput> */}
                                </div>
                            </Col>

                            <Col md={6} className={'mb-5'}>
                                <div className={cx('infor-set', 'gender')}>
                                    <h3>Giới tính</h3>
                                    {/* {/* <FormInput discr></FormInput> */}
                                </div>
                            </Col>

                            <Col md={6} className={'mb-5'}>
                                <div className={cx('infor-set', 'edu')}>
                                    <h3>Trình độ học vấn</h3>
                                    {/* {/* <FormInput discr></FormInput> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={cx('descript')}>
                        <h3>Mô tả về bạn</h3>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
            <div className={cx('submit-btn')}>
                <Button
                    primary
                    small
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Sửa thông tin
                </Button>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
        </Container>
    );
}

export default Profile;
