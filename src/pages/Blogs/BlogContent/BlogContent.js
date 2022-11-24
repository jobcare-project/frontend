import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import Card from '~/components/Card/Card';
import CardBlog from '~/components/CardBlog/CardBlog';
import Input from '~/components/Input/Input/Input';

import { db } from '../firebase';
import { useState, useEffect, useRef } from 'react';

import { collection, onSnapshot } from 'firebase/firestore';
const cx = classNames.bind(styles);
function ContentBlog({ data, to }) {
    const [blog, setBlog] = useState([]);
    const blogCollectionRef = collection(db, 'blog');

    useEffect(() => {
        onSnapshot(blogCollectionRef, (snapshot) => {
            setBlog(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
        });
    }, [blog, blogCollectionRef]);
    return (
        <div className={cx('wrapper')}>
            <Container>
                {blog.length ? (
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
                                    {blog.slice(0, 8).map((blog, index) => {
                                        return (
                                            <Col>
                                                <CardBlog
                                                    data={blog}
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
