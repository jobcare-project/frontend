import React from 'react';
import styles from './FormSubmitCV.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FormInput } from '~/pages/RecruiterPost/Input/Input';
const cx = classNames.bind(styles);

function FormSubmitCV({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-submit')}>
                <div className={cx('form-header')}>
                    <h2>
                        Ứng tuyển vị trí: <span>Frontend Developer</span>
                    </h2>
                </div>
                <div className={cx('form-choice')}>
                    <h3>Chọn CV Online:</h3>
                    <div className={cx('form-btn')}>
                        <div className={cx('btn-left')}>
                            <FormInput type="file"></FormInput>
                        </div>
                    </div>
                </div>
                <div className={cx('form-infor')}>
                    <div className={cx('infor-name')}>
                        <h2>Họ và tên</h2>
                        <input type="text" />
                    </div>
                </div>
                <div className={cx('form-check')}>
                    <div className={cx('check-box')}>
                        <FormInput type="checkbox" />
                    </div>
                    <div className={cx('check-rule')}>
                        Đảm bảo thông tin của bạn hoàn toàn chính xác để giữ uy
                        tín cho chúng tôi cũng như là cho bạn
                    </div>
                </div>
                <div className={cx('form-send')}>
                    <Button primary>Nộp CV</Button>
                </div>
            </div>
        </div>
    );
}

export default FormSubmitCV;
