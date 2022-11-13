import React from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownPage.module.scss';
import DropDown from '~/components/Input/DropDown/DropDown';

const cx = classNames.bind(styles);
const mucluongData = [
    {
        value: '101',
        name: 'Tin đã lưu',
    },
    {
        value: '102',
        name: 'Bài viết đã lưu',
    },
    {
        value: '103',
        name: 'Bài đăng của bạn',
    },
];
function DropDownPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('dropdown-right')}>
                <DropDown data={mucluongData} title="Đã lưu"></DropDown>
            </div>
        </div>
    );
}

export default DropDownPage;
