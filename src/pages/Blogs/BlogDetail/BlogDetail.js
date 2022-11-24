import React from 'react';
import styles from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import CommentModal from '~/components/Modal/CommentModal/CommentModal';

const cx = classNames.bind(styles);
const blogDetails = [
    {
        // avatar: 'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        // username: 'Đông Phạm',
        title: 'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        content:
            'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        createAt: '4 ngày trước',
    },
];
function BlogDetail({ data }) {
    return (
        <Container>
            {blogDetails.length ? (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('user')}>
                            <div className={cx('username')}>Đông Phạm</div>
                            <div className={cx('icon')}>
                                <div className={cx('icon-heart')}>
                                    <span>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </span>
                                    <span className={cx('heart-reaction')}>
                                        12
                                    </span>
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
                        {blogDetails.slice(0, 8).map((blogDetail, index) => {
                            return (
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>
                                        {blogDetail.title}
                                    </div>
                                    <div className={cx('content-detail')}>
                                        {blogDetail.content}
                                    </div>
                                    <div className={cx('comment')}>
                                        <CommentModal />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                ''
            )}
        </Container>
    );
}

export default BlogDetail;
