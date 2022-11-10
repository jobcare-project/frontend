import classNames from 'classnames/bind';
import { Buffer } from 'buffer';

import images from '~/assets/images';
import styles from './ProfileBanner.module.scss';

const cx = classNames.bind(styles);

function ProfileBanner({ username, avatarImg }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background')}
                src={images.backgroundAccounts}
                alt="background"
            />
            <div className={cx('user-profile')}>
                {avatarImg?.data?.type === 'Buffer' ? (
                    <img
                        className={cx('avatar-img')}
                        src={`data:${avatarImg.type};base64,${Buffer.from(
                            avatarImg.data.data,
                        ).toString('base64')}`}
                        alt="avatar"
                    />
                ) : (
                    <img
                        className={cx('avatar-img')}
                        src="https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png"
                        alt="avatar"
                    />
                )}

                <span className={cx('user-name')}>{username}</span>
            </div>
        </div>
    );
}

export default ProfileBanner;
