import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AddLogo.module.scss';
const cx = classNames.bind(styles);

export const AddLogo = ({}) => {
    return (
        <>
            <div className={cx('logo')}>
                <label for="upload-photo" className={cx('upload-photo')}>
                    <img src="" alt="" className={cx('logo')} />
                </label>
                <div className={cx('btn-logo')}>
                    <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                        className={cx('upimg-btn')}
                    />
                </div>
            </div>
        </>
    );
};
