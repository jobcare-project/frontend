import React from 'react';
import styles from './SavedPost.module.scss';
import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import DropDownPage from './DropDownPage/DropDownPage';
import Card from '~/components/Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import { fetchListJob } from '~/pages/Home/homeSlice';
import { fetchDeletedJobDesc } from '../Home/homeSlice';

const cx = classNames.bind(styles);
function SavePost() {
    const dispatch = useDispatch();
    const jobListData = useSelector(jobListSelector);

    useEffect(() => {
        dispatch(fetchListJob());
    }, []);

    const handleDeletedPost = (id) => {
        dispatch(fetchDeletedJobDesc(id));
    };
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h2 className={cx('title-header')}>Bài viết</h2>
                    <DropDownPage></DropDownPage>
                </div>

                {jobListData.length ? (
                    <div className={cx('wrapper')}>
                        <Row>
                            {jobListData &&
                                jobListData.slice(0, 16).map((recruitment) => {
                                    return (
                                        <Col
                                            key={recruitment.id}
                                            lg={3}
                                            md={4}
                                            sm={6}
                                        >
                                            <Card
                                                data={recruitment}
                                                onDelete={() =>
                                                    handleDeletedPost(
                                                        recruitment.id,
                                                    )
                                                }
                                                deleted={
                                                    <ion-icon name="trash-outline"></ion-icon>
                                                }
                                                titleDeleted="Xoá tin"
                                                repair={
                                                    <ion-icon name="pencil-outline"></ion-icon>
                                                }
                                                titlRepair="Sửa tin"
                                            ></Card>
                                        </Col>
                                    );
                                })}
                        </Row>
                    </div>
                ) : (
                    ''
                )}
                {/* <button onClick={() => handleDeletedPost(recruitment.id)}>
                    Xoas em di
                </button> */}
            </div>
        </Container>
    );
}

export default SavePost;
