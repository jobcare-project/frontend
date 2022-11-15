import React from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownPage.module.scss';
import DropDown from '~/components/Input/DropDown/DropDown';

const cx = classNames.bind(styles);
const tinluuData = [
    {
        value: '1',
        name: 'Bài đăng của bạn',
    },
    {
        value: '2',
        name: 'Tin tuyển dụng đã lưu',
    },
    {
        value: '3',
        name: 'Bài viết đã lưu',
    },
];

function DropDownPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('dropdown-right')}>
                <DropDown data={tinluuData} title="Bài đăng của bạn"></DropDown>
            </div>
        </div>
    );
}

export default DropDownPage;
