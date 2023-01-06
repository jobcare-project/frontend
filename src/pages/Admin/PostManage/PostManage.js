import React from 'react';
import styles from './PostManage.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function PostManageAdmin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img src={images.fix} alt="" />
                <h2 className={cx('warning')}>
                    Chúng tôi sẽ cố gắng hoàn thành tính năng này trong thời
                    gian sớm nhất có thể !!!
                </h2>
            </div>
        </div>
    );
}

export default PostManageAdmin;
