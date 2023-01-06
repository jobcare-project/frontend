import React from 'react';
import styles from './SavedRecruitment.module.scss';
import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { savedRecruitmentListSelector } from '~/redux/Selectors/jobSelector';
import { fetchSavedRecruitments } from '~/pages/Accounts/accountsSlice';
import Card from '~/components/Card/Card';

const cx = classNames.bind(styles);
function SavedRecruitment() {
    const dispatch = useDispatch();
    const savedRecruitmentList = useSelector(savedRecruitmentListSelector);
    console.log('savedRecruitmentList', savedRecruitmentList);

    useEffect(() => {
        dispatch(fetchSavedRecruitments());
    }, []);

    return (
        <Container>
            <div className={cx('wrapper')}>
                {!savedRecruitmentList.length ? (
                    <div className={cx('heading')}>
                        <h2 className={cx('title-header')}>
                            Bạn chưa lưu tin tuyển dụng nào
                        </h2>
                    </div>
                ) : (
                    <>
                        <div className={cx('heading')}>
                            <h2 className={cx('title-header')}>
                                Tin tuyển dụng đã lưu
                            </h2>
                        </div>
                        <Row>
                            {savedRecruitmentList.length &&
                                savedRecruitmentList.map((recruitment) => (
                                    <Col key={recruitment.id} md={3}>
                                        <Card
                                            saved={
                                                <ion-icon name="heart-outline"></ion-icon>
                                            }
                                            titleSaved="Lưu tin"
                                            data={
                                                recruitment.savedRecruitment_job
                                            }
                                        ></Card>
                                    </Col>
                                ))}
                        </Row>
                    </>
                )}
            </div>
        </Container>
    );
}

export default SavedRecruitment;
