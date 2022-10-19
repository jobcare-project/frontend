import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('avatar')}>
                    <img src="" alt="" />
                    hello
                </div>
                <div className={cx('infor')}>
                    <div className={cx('infor-header')}>
                        <h1>TRANG CÁ NHÂN</h1>
                    </div>
                    <div className={cx('left')}>
                        <div className={cx('name')}>
                            <h3>Tên người dùng</h3>
                            <span>Văn Đông</span>
                        </div>
                        <div className={cx('email')}>
                            <h3>Email</h3>
                            <span>dongpham21082001@gmail.com</span>
                        </div>
                        <div className={cx('phone')}>
                            <h3>Số điện thoại</h3>
                            <span>0853390931</span>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('birth')}>
                            <h3>Ngày sinh</h3>
                            <span>21/08/2001</span>
                        </div>
                        <div className={cx('gender')}>
                            <h3>Giới tính</h3>
                            <span>Nam</span>
                        </div>
                        <div className={cx('edu')}>
                            <h3>Trình độ học vấn</h3>
                            <span>Đại học</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
