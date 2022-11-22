import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import Card from '~/components/Card/Card';
import CardBlog from '~/components/CardBlog/CardBlog';
import Input from '~/components/Input/Input/Input';
const cx = classNames.bind(styles);
const blogLists = [
    {
        avatar: 'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        username: 'Đông Phạm',
        title: 'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        content:
            'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        createAt: '4 ngày trước',
    },
    {
        avatar: 'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        username: 'Đông Phạm',
        title: 'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        content:
            'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        createAt: '4 ngày trước',
    },
];
function ContentBlog({ data, to }) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                {blogLists.length ? (
                    <div className={cx('container-left')}>
                        <div className={cx('heading')}>
                            <h2 className={cx('header-title')}>
                                Bài viết nổi bật
                            </h2>
                            <p className={cx('sub-heading')}>
                                Tổng hợp các bài viết chia sẻ về kinh nghiệm học
                                tập, ôn tập, phỏng vấn liên quan về nghề nghiệp
                            </p>
                        </div>
                        <div className={cx('content-topic')}>
                            <div className={cx('content-blog')}>
                                <Row>
                                    {blogLists
                                        .slice(0, 8)
                                        .map((blogList, index) => {
                                            return (
                                                <Col>
                                                    <CardBlog
                                                        data={blogList}
                                                        key={index}
                                                    ></CardBlog>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </div>
                            <div className={cx('title-related')}>
                                <h3>Các chủ đề được đề xuất</h3>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </Container>
        </div>
    );
}

export default ContentBlog;
