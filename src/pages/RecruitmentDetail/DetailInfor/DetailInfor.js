import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './DetailInfor.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Modal from '~/components/Modal/ModalCv/ModalCv';
import config from '~/config';
import { jobDetailSelector } from '~/redux/Selectors/recruitmentDetail';
import { fetchDetailJobDesc } from '../RecruitmentPageSlice';

const cx = classNames.bind(styles);

export default function DetailInfor({ data }) {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const { recruitmentId } = useParams();
    const jobDetailData = useSelector(jobDetailSelector);

    useEffect(() => {
        dispatch(fetchDetailJobDesc(recruitmentId));
    }, [dispatch, recruitmentId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [recruitmentId]);

    return (
        <>
            <Container>
                <div className={cx('wrapper')}>
                    <div className={cx('box')}>
                        {/* <div className={cx('title')}>{data?.title}</div> */}
                        <div className={cx('box-left')}>
                            <div className={cx('title')}>
                                <h2 className={cx('title-header')}>
                                    {jobDetailData?.title}
                                </h2>
                            </div>
                            <h3 className={cx('company-name')}>
                                {jobDetailData.recruiter_jobs?.fullname}
                            </h3>
                            <div className={cx('time')}>
                                <span className={cx('type-work-icons')}>
                                    <ion-icon
                                        name="time-outline"
                                        className={cx('time-icon')}
                                    ></ion-icon>
                                </span>
                                <span className={cx('end-day')}>
                                    H???n n???p h??? s??: {jobDetailData?.endDate}
                                </span>
                            </div>
                        </div>
                        <div className={cx('box-logo')}>
                            <img
                                src={
                                    jobDetailData?.recruiter_jobs?.imageUrl
                                        ? jobDetailData?.recruiter_jobs
                                              ?.imageUrl
                                        : images.avatarDefault
                                }
                                alt={jobDetailData?.recruiter_jobs?.fullname}
                            />
                            {/* <img src={images.CV} alt="" /> */}
                        </div>
                    </div>
                    <div className={cx('content-detail')}>
                        <div className={cx('recruitment-detail')}>
                            <div className={cx('detail')}>
                                <div className={cx('detail-require')}>
                                    <h2 className={cx('adress')}>
                                        Chi ti???t tuy???n d???ng
                                    </h2>
                                    <Row>
                                        <Col md={6} className={'mb-5'}>
                                            <div className={cx('type-work')}>
                                                <span
                                                    className={cx(
                                                        'type-work-icon',
                                                    )}
                                                >
                                                    <ion-icon name="cash-outline"></ion-icon>
                                                </span>
                                                <span>M???c l????ng</span>
                                            </div>
                                            <span className={cx('type-detail')}>
                                                {jobDetailData?.salary}
                                            </span>
                                        </Col>
                                        <Col md={6} className={'mb-5'}>
                                            <div className={cx('type-work')}>
                                                <span
                                                    className={cx(
                                                        'type-work-icon',
                                                    )}
                                                >
                                                    <ion-icon name="people-outline"></ion-icon>
                                                </span>
                                                <span>S??? l?????ng ng?????i</span>
                                            </div>
                                            <span className={cx('type-detail')}>
                                                {jobDetailData?.amount}
                                            </span>
                                        </Col>
                                        <Col md={6} className={'mb-5'}>
                                            <div className={cx('type-work')}>
                                                <span
                                                    className={cx(
                                                        'type-work-icon',
                                                    )}
                                                >
                                                    <ion-icon name="time-outline"></ion-icon>
                                                </span>
                                                <span>H??nh th???c l??m vi???c</span>
                                            </div>
                                            <span className={cx('type-detail')}>
                                                {jobDetailData?.workFrom}
                                            </span>
                                        </Col>
                                        <Col md={6} className={'mb-5'}>
                                            <div className={cx('type-work')}>
                                                <span
                                                    className={cx(
                                                        'type-work-icon',
                                                    )}
                                                >
                                                    <ion-icon name="female-outline"></ion-icon>
                                                </span>
                                                <span>Gi???i t??nh</span>
                                            </div>
                                            <span className={cx('type-detail')}>
                                                {jobDetailData?.gender}
                                            </span>
                                        </Col>
                                        <Col md={6} className={'mb-5'}>
                                            <div className={cx('type-work')}>
                                                <span
                                                    className={cx(
                                                        'type-work-icon',
                                                    )}
                                                >
                                                    <ion-icon name="podium-outline"></ion-icon>
                                                </span>
                                                <span>C???p b???c</span>
                                            </div>
                                            <span className={cx('type-detail')}>
                                                {jobDetailData?.level}
                                            </span>
                                        </Col>
                                        <Col md={6} className={'mb-5'}>
                                            <div className={cx('type-work')}>
                                                <span
                                                    className={cx(
                                                        'type-work-icon',
                                                    )}
                                                >
                                                    <ion-icon name="accessibility-outline"></ion-icon>
                                                </span>
                                                <span>Kinh nghi???m</span>
                                            </div>
                                            <span className={cx('type-detail')}>
                                                {jobDetailData?.experience}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className={cx('location')}>
                                <h2 className={cx('adress')}>
                                    ?????a ??i???m l??m vi???c
                                </h2>
                                <span className={cx('address-detail')}>
                                    - {jobDetailData?.location}
                                </span>
                            </div>
                            <div className={cx('content-post')}>
                                <div className={cx('descript-job')}>
                                    <h1>M?? t??? c??ng vi???c</h1>
                                    <div className={cx('content-tab')}>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: jobDetailData.jobDescription,
                                            }}
                                        ></span>
                                    </div>
                                </div>
                                <div className={cx('descript-require')}>
                                    <h1>Y???u c???u ???ng vi??n</h1>
                                    <div className={cx('content-tab')}>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: jobDetailData?.jobRequire,
                                            }}
                                        ></span>
                                    </div>
                                </div>
                                <div className={cx('descript-benefit')}>
                                    <h1>Quy???n l???i</h1>
                                    <div className={cx('content-tab')}>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: jobDetailData?.welfare,
                                            }}
                                        ></span>
                                    </div>
                                </div>
                                <div className={cx('mothod-title')}>
                                    <h2>C??ch th???c ???ng tuy???n</h2>
                                </div>
                                <div className={cx('btn-post')}>
                                    <Button
                                        primary
                                        className={cx('btn-submit')}
                                        onClick={() => {
                                            setModalOpen(true);
                                        }}
                                    >
                                        ???ng tuy???n ngay
                                    </Button>
                                    <Button
                                        secondary
                                        className={cx('btn-saved')}
                                    >
                                        L??u tin
                                    </Button>

                                    {modalOpen && (
                                        <Modal
                                            data={jobDetailData}
                                            setOpenModal={setModalOpen}
                                        />
                                    )}
                                </div>
                                <div className={cx('time')}>
                                    <span>
                                        H???n n???p h??? s??: {jobDetailData?.endDay}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('detail-ads')}>
                            <Link className={cx('link')} to={config.routes.cv}>
                                <img src={images.CV} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
