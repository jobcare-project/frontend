import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import { db } from '~/config/Firebase/firebase';
import CommentModal from '~/components/Modal/CommentModal/CommentModal';
import CardAds from '~/components/CardAds/CardAds';
import Comment from '../Comment/Comment';

const cx = classNames.bind(styles);

function BlogDetail() {
    const [openCommentModal, setOpenCommentModal] = useState(false);
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => {
        id && getBlogDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getBlogDetail = async () => {
        const blogRef = collection(db, 'blog');
        const docRef = doc(db, 'blog', id);
        const blogDetail = await getDoc(docRef);

        setBlog(blogDetail.data());
        const relatedBlogsQuery = query(blogRef);
        const relatedBlogSnapshot = await getDocs(relatedBlogsQuery);
        const relatedBlogs = [];
        relatedBlogSnapshot.forEach((doc) => {
            relatedBlogs.push({ id: doc.id, ...doc.data() });
        });
        setRelatedBlogs(relatedBlogs);
    };

    console.log('relatedQuizs', relatedBlogs);
    return (
        <Container>
            {/* {openCommentModal && (
            <CommentModal closeCommentModal={setOpenCommentModal} />
        )} */}

            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('user')}>
                        <div className={cx('user-infor')}>
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
                                <div
                                    className={cx('icon-comment')}
                                    onClick={() => {
                                        setOpenCommentModal(true);
                                    }}
                                >
                                    <span>
                                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                    </span>
                                    <span className={cx('comment-reaction')}>
                                        12
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('content')}>
                        <div className={cx('content-header')}>
                            {blog?.title}
                        </div>
                        <div className={cx('content-detail')}>
                            {blog?.content}
                        </div>
                        <div className={cx('comment')}></div>
                    </div>
                </div>
                {/* <CardAds></CardAds> */}
                <Comment></Comment>
            </div>
        </Container>
    );
}

export default BlogDetail;
