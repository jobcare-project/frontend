import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '~/assets/images';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

function AvatarOverview() {
    const [visible, setVisible] = useState(true);

    return (
        <div className={cx('wrapper')}>
            {visible && (
                <div className={cx('avatar-block')}>
                    <img
                        className={cx('avatar-img')}
                        src={images.backgroundAccounts}
                        alt="avatar-default"
                    />
                    <div className={cx('upload-avatar')}>
                        <ion-icon name="push-outline"></ion-icon>
                    </div>
                </div>
            )}
            <div className={cx('controls')}>
                <div className={cx('control-icon')}>
                    <ion-icon name="push-outline"></ion-icon>
                </div>
                <div
                    onClick={() => {
                        setVisible(!visible);
                    }}
                    className={cx('control-icon')}
                >
                    {visible ? (
                        <ion-icon name="eye-off-outline"></ion-icon>
                    ) : (
                        <ion-icon name="eye-sharp"></ion-icon>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AvatarOverview;
