import React from 'react';
import styles from './SavedPost.module.scss';
import classNames from 'classnames/bind';
import { Container, Row } from 'react-bootstrap';
import DropDownPage from './DropDownPage/DropDownPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import { fetchListJob } from '~/pages/Home/homeSlice';
import SavedPostItem from './SavedPostItem';

const cx = classNames.bind(styles);
function SavePost() {
    const dispatch = useDispatch();
    const jobListData = useSelector(jobListSelector);

    useEffect(() => {
        dispatch(fetchListJob());
    }, []);

    // const handleDeletedPost = (id) => {
    //     dispatch(fetchDeletedJobDesc(id));
    // };
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
                                    return <SavedPostItem data={recruitment} />;
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
