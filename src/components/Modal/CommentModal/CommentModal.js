import React from 'react';
import styles from './CommentModal.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import images from '~/assets/images';
import Input from '~/components/Input/Input/Input';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function CommentModal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <span className={cx('close-btn')}>
                    <ion-icon name="close-outline"></ion-icon>
                </span>
                <div className={cx('user-comment')}>
                    {/* {user.image ? (
                        <img
                            className={cx('avatar-img', 'avatar')}
                            src={`data:${
                                user.image.data.type
                            };base64,${Buffer.from(
                                user.image.data.data,
                            ).toString('base64')} `}
                            alt={user.image.name}
                        />
                    ) : ( */}
                    <img
                        className={cx('avatar')}
                        src={images.avatarDefault}
                        alt="Avatar"
                    />
                    <div className={cx('comment-input')}>
                        <Input secondary placeholder="Viết bình luận của bạn" />
                    </div>
                </div>
                <div className={cx('comment-editor')}></div>
                <div className={cx('comment-btn')}>
                    <Button primary>Bình Luận</Button>
                </div>
            </div>
        </div>
    );
}
export default CommentModal;
