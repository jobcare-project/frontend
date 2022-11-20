import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BestRecruitment.module.scss';
import Card from '~/components/Card/Card';
import { fetchListJob } from '../homeSlice';
import { jobListSelector } from '~/redux/Selectors/jobSelector';

const cx = classNames.bind(styles);

export default function BestRecruitment() {
    const dispatch = useDispatch();
    const jobListData = useSelector(jobListSelector);

    useEffect(() => {
        dispatch(fetchListJob());
    }, []);

    // console.log('jobListData', jobListData);
    return (
        <Container>
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
                                            repair={
                                                <ion-icon name="heart-outline"></ion-icon>
                                            }
                                            titlRepair="Lưu tin"
                                        ></Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </div>
            ) : (
                ''
            )}
        </Container>
    );
}
