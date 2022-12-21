import React from 'react';
import classNames from 'classnames/bind';

import styles from './Recruiter.module.scss';

const cx = classNames.bind(styles);

function Recruiter() {
    return <div className={cx('wrapper')}>Code bảng tin ở đây !!!</div>;
}

export default Recruiter;
