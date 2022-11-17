import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Buffer } from 'buffer';

import styles from './UserOptions.module.scss';
import images from '~/assets/images';
import { fetchLogout } from '~/pages/Accounts/accountsSlice';
import config from '~/config';

const cx = classNames.bind(styles);

function UserOptions({ user }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(fetchLogout());
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    {user.image ? (
                        <img
                            className={cx('avatar-img', 'avatar')}
                            src={`data:${
                                user.image.data.type
                            };base64,${Buffer.from(
                                user.image.data.data,
                            ).toString('base64')} `}
                            alt={user.image.name}
                        />
                    ) : (
                        <img
                            className={cx('avatar')}
                            src={images.avatarDefault}
                            alt="Avatar"
                        />
                    )}
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('user-name')}>{user.fullname}</div>
                    <div className={cx('user-email')}>{user.email}</div>
                </div>
            </div>
            <ul className={cx('option')}>
                <hr />
                <ul className={cx('option-list')}>
                    <Link
                        className={cx('option-item-link')}
                        to={config.routes.profile}
                    >
                        <li className={cx('option-item')}>Trang cá nhân</li>
                    </Link>
                </ul>

                <hr />
                <ul className={cx('option-list')}>
                    <Link
                        className={cx('option-item-link')}
                        to={config.routes.blog}
                    >
                        <li className={cx('option-item')}>Viết blog</li>
                    </Link>

                    <Link
                        className={cx('option-item-link')}
                        to={config.routes.blog}
                    >
                        <li className={cx('option-item')}>Bài viết đã lưu</li>
                    </Link>
                </ul>

                <hr />
                <ul className={cx('option-list')}>
                    <Link
                        className={cx('option-item-link')}
                        to={config.routes.settings}
                    >
                        <li className={cx('option-item')}>Cài đặt</li>
                    </Link>

                    <Link
                        className={cx('option-item-link')}
                        to={config.routes.accounts}
                    >
                        <li
                            onClick={() => {
                                handleLogout();
                            }}
                            className={cx('option-item')}
                        >
                            Đăng xuất
                        </li>
                    </Link>
                </ul>
            </ul>
        </div>
    );
}

UserOptions.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserOptions;
