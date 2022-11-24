import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import { fetchDeletedJobDesc } from '~/pages/Recruiter/recruiterSlice';
import ModalPost from '../Modal/ModalDeleted/ModalDeleted';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

export default function Card({
    data,
    to,
    deleted,
    repair,
    saved,
    titleDeleted = '',
    titlRepair = '',
    titleSaved = '',
    onDelete,
}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const handleDeletedPost = (id) => {
        dispatch(fetchDeletedJobDesc(data.id));
    };
    return (
        <div className={cx('wrapper')}>
            {/* /id */}
            <Link className={cx('link')} to={config.routes.recruitmentdetail}>
                <div className={cx('image-block')}>
                    {data?.thumbnail ? (
                        <img
                            className={cx('image')}
                            src={data?.thumbnail}
                            alt="anh nha tuyen dung"
                        />
                    ) : (
                        <img
                            className={cx('image')}
                            src={images.recruitmentCard}
                            alt="anh nha tuyen dung"
                        />
                    )}
                </div>
                <div className={cx('information')}>
                    <div className={cx('title')}>{data?.title}</div>
                    {data?.description && (
                        <div className={cx('description')}>
                            {data?.description}
                        </div>
                    )}
                    {data.recruiter_jobs?.fullname && (
                        <div className={cx('description')}>
                            {data.recruiter_jobs.fullname}
                        </div>
                    )}
                    <div className={cx('subdesc')}>
                        <div className={cx('subdesc-item subdesc-left')}>
                            <div className={cx('subdesc-text')}>
                                <ion-icon name="cash-outline"></ion-icon>
                                <span>{data?.salary}</span>
                            </div>
                            <div className={cx('subdesc-text')}>
                                <ion-icon name="location-outline"></ion-icon>
                                <span>{data?.location}</span>
                            </div>
                            {/* <div className={cx('subdesc-bottom')}>
                                <ion-icon name="timer-outline"></ion-icon>
                                <span>{data?.endDate}</span>
                            </div> */}
                            <div className={cx('subdesc-item subdesc-right')}>
                                <div className={cx('subdesc-text')}>
                                    <ion-icon name="timer-outline"></ion-icon>
                                    <span>{data?.createAt}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            {/* convert to button  */}
            <ModalPost
                handleClose={handleClose}
                show={show}
                onActionRequest={handleDeletedPost}
            />
            <div className={cx('subdesc-control')}>
                <div
                    onClick={handleShow}
                    className={({ isActive }) =>
                        isActive
                            ? cx('subdesc-text', 'active')
                            : cx('subdesc-text')
                    }
                >
                    {deleted && (
                        <span className={cx('subdesc-text')}>{deleted}</span>
                    )}
                    <span>{titleDeleted}</span>
                </div>
                <div
                    className={({ isActive }) =>
                        isActive
                            ? cx('subdesc-text', 'active')
                            : cx('subdesc-text')
                    }
                >
                    {repair && (
                        <span className={cx('subdesc-text')}>{repair}</span>
                    )}
                    <span>{titlRepair}</span>
                </div>
            </div>
        </div>
    );
}
