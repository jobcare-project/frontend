import classNames from 'classnames/bind';
import { ErrorMessage, Formik } from 'formik';
import { forwardRef } from 'react';
import * as Yup from 'yup';
import Input from '~/components/Input/Input/Input';

import styles from './AddAccountForm.module.scss';

const cx = classNames.bind(styles);

function AddAccountForm({ onSubmitForm }, ref) {
    return (
        <div className={cx('wrapper')}>
            <Formik
                innerRef={ref}
                initialValues={{
                    fullname: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                }}
                onSubmit={() => {
                    onSubmitForm();
                }}
                validationSchema={Yup.object({
                    fullname: Yup.string().required(
                        'Mục này không được để trống!',
                    ),
                    email: Yup.string()
                        .email('Email không hợp lệ')
                        .required('Mục này không được để trống!'),
                    password: Yup.string()
                        .min(6, 'Mật khẩu phải có ít nhất là 6 ký tự!')
                        .required('Mục này không được để trống!'),
                    passwordConfirmation: Yup.string()
                        .oneOf(
                            [Yup.ref('password'), null],
                            'Mật khẩu không trùng khớp!',
                        )
                        .required('Mục này không được để trống!'),
                })}
            >
                {(formik) => (
                    <form className={cx('form')} onSubmit={formik.handleSubmit}>
                        <div className={cx('form-group')}>
                            <label htmlFor="fullname">Tên người dùng</label>
                            <Input
                                className={cx('form-group-input')}
                                rounded
                                border
                                id="fullname"
                                type="text"
                                name="fullname"
                                placeholder="Tên người dùng"
                                {...formik.getFieldProps('fullname')}
                            />
                            <div className={cx('error-message')}>
                                <ErrorMessage name="fullname" />
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="email">Email</label>
                            <Input
                                className={cx('form-group-input')}
                                rounded
                                border
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Tên người dùng"
                                {...formik.getFieldProps('email')}
                            />
                            <div className={cx('error-message')}>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password">Mật khẩu</label>
                            <Input
                                className={cx('form-group-input')}
                                rounded
                                border
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Tên người dùng"
                                {...formik.getFieldProps('password')}
                            />
                            <div className={cx('error-message')}>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="passwordConfirmation">
                                Nhập lại mật khẩu
                            </label>
                            <Input
                                className={cx('form-group-input')}
                                rounded
                                border
                                id="passwordConfirmation"
                                type="password"
                                name="passwordConfirmation"
                                placeholder="Tên người dùng"
                                {...formik.getFieldProps(
                                    'passwordConfirmation',
                                )}
                            />
                            <div className={cx('error-message')}>
                                <ErrorMessage name="passwordConfirmation" />
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default forwardRef(AddAccountForm);
