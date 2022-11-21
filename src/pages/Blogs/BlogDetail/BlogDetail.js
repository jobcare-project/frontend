import React from 'react';
import styles from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
function BlogDetail({ data }) {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('user')}>
                        <div className={cx('username')}>Đông Phạm</div>
                        <div className={cx('icon')}>
                            <div className={cx('icon-heart')}>
                                <span>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </span>
                                <span className={cx('heart-reaction')}>12</span>
                            </div>
                            <div className={cx('icon-comment')}>
                                <span>
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                </span>
                                <span className={cx('comment-reaction')}>
                                    12
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-header')}>
                            {data?.title}
                        </div>
                        <div className={cx('content-detail')}>
                            {data?.content}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default BlogDetail;
