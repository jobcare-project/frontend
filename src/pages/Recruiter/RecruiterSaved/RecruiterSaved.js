import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Card from '~/components/Card/Card';
// import SavePost from '~/pages/SavePost/SavedPost';

import { accountsDataSelector } from '~/redux/Selectors/authSelector';
import { recruiterJobListSelector } from '~/redux/Selectors/recruiterSelector';
import { fetchRecruiterDetail } from '../recruiterSlice';

import classNames from 'classnames/bind';

import styles from './RecruiterSaved.module.scss';

const cx = classNames.bind(styles);
function RecruiterSaved() {
    const userData = useSelector(accountsDataSelector);
    const recruiterJobList = useSelector(recruiterJobListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecruiterDetail(userData.id));
    }, []);

    // console.log('recruiterJobList', recruiterJobList);

    return (
        <Container>
            {recruiterJobList.length ? (
                <div className={cx('wrapper')}>
                    <Row>
                        {recruiterJobList &&
                            recruiterJobList.map((recruitmentPostDetail) => {
                                return (
                                    <Col
                                        key={recruitmentPostDetail.id}
                                        lg={3}
                                        md={4}
                                        sm={6}
                                    >
                                        <Card
                                            data={recruitmentPostDetail}
                                            deleted={
                                                <ion-icon name="trash-outline"></ion-icon>
                                            }
                                            titleDeleted="Xóa tin"
                                            repair={
                                                <ion-icon name="pencil-outline"></ion-icon>
                                            }
                                            titleRepair="Sửa tin"
                                        ></Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </div>
            ) : (
                ''
            )}
            {/* <PaginationCOM items={jobListData} setjobsItem={setjobsItem} /> */}
        </Container>
    );
}

export default RecruiterSaved;
