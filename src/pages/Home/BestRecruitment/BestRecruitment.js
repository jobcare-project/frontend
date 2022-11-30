import classNames from 'classnames/bind';
import styles from './BestRecruitment.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '~/components/Card/Card';
import { fetchListJob } from '../homeSlice';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import PaginatedItems from './pagination';
import PaginationCOM from './pagination';
import { _LIMIT_PAGE } from '~/config/apis';

const cx = classNames.bind(styles);

export default function BestRecruitment() {
    const [jobsItem, setjobsItem] = useState([]);
    const dispatch = useDispatch();
    const jobListData = useSelector(jobListSelector);

    useEffect(() => {
        dispatch(fetchListJob());
        if (jobListData.length > 0) {
            const jobs = jobListData.slice(0, _LIMIT_PAGE);
            setjobsItem(jobs);
        }
    }, [JSON.stringify(jobListData)]);

    // console.log('jobListData', jobListData);
    return (
        <Container>
            {jobListData.length ? (
                <div className={cx('wrapper')}>
                    <Row>
                        {jobsItem &&
                            jobsItem.map((recruitment) => {
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
            <PaginationCOM items={jobListData} setjobsItem={setjobsItem} />
        </Container>
    );
}
