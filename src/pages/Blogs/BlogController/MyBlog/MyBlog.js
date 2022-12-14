import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './MyBlog.module.scss';
import classNames from 'classnames/bind';
import CardBlog from '~/components/CardBlog/CardBlog';
import Loading from '~/components/Loading/Loading';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { accountsDataSelector } from '~/redux/Selectors/authSelector';

import { db } from '~/config/Firebase/firebase';
import { useState, useEffect } from 'react';

import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';
const cx = classNames.bind(styles);
function ContentBlog({ data, to }) {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const userData = useSelector(accountsDataSelector);

    const blogCollectionRef = query(
        collection(db, 'blogs'),
        where('userData.id', '==', userData.id),
    );
    //Firebase snapShot
    useEffect(() => {
        onSnapshot(blogCollectionRef, (snapshot) => {
            setBlogs(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure wanted to delete that blog ?')) {
            try {
                await deleteDoc(doc(db, 'blogs', id));
                toast.success('Blog deleted successfully');
            } catch (err) {
                console.log(err);
            }
        }
    };
    return loading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <Container>
                {blogs.length ? (
                    <div className={cx('container-left')}>
                        <div className={cx('heading')}>
                            <h2 className={cx('header-title')}>
                                B??i vi???t n???i b???t
                            </h2>
                            <p className={cx('sub-heading')}>
                                T???ng h???p c??c b??i vi???t chia s??? v??? kinh nghi???m h???c
                                t???p, ??n t???p, ph???ng v???n li??n quan v??? ngh??? nghi???p
                            </p>
                        </div>
                        <div className={cx('content-topic')}>
                            <div className={cx('content-blog')}>
                                <Row>
                                    {blogs.slice(0, 8).map((blogs, index) => {
                                        return (
                                            <Col>
                                                <CardBlog
                                                    data={blogs}
                                                    handleDelete={handleDelete}
                                                    iconDelete={blogs}
                                                    iconRepair={blogs}
                                                ></CardBlog>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                            <div className={cx('title-related')}>
                                <h3>C??c ch??? ????? ???????c ????? xu???t</h3>
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
