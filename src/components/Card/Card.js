import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import images from '~/assets/images';
import {
    fetchDeletedJobDesc,
    recruiterSlice,
} from '~/pages/Recruiter/recruiterSlice';
import { accountsDataSelector } from '~/redux/Selectors/authSelector';
import { savedRecruitmentListSelector } from '~/redux/Selectors/jobSelector';
import { savedRecruitmentApi } from '~/services/jobService';
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
    titleRepair = '',
    titleSaved = '',
}) {
    const userData = useSelector(accountsDataSelector);
    const savedRecruitmentList = useSelector(savedRecruitmentListSelector);

    const [show, setShow] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleDeletedPost = (id) => {
        dispatch(fetchDeletedJobDesc(data.id));
        toast.success('Xoá bài thành công', toastifyOptions);
        dispatch(recruiterSlice.actions.restMessage(false));
    };
    const toastifyOptions = {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const isSaved = savedRecruitmentList.find(
            (recruitment) => recruitment.jobId === data.id,
        );
        if (isSaved) {
            setIsSaved(isSaved);
        }
    }, [savedRecruitmentList, data]);

    const handleSaveRecruitment = async () => {
        try {
            await savedRecruitmentApi({ jobId: data.id });
            setIsSaved(!isSaved);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link
                className={cx('link')}
                to={`/recruitmentpage/recruitmentdetail/${data.id}`}
            >
                <div className={cx('image-block')}>
                    {userData?.id === data?.recruiterId ? (
                        <img
                            className={cx('image')}
                            src={userData?.imageUrl}
                            alt="anh nha tuyen dung"
                        />
                    ) : data?.recruiter_jobs?.imageUrl ? (
                        <img
                            className={cx('image')}
                            src={data?.recruiter_jobs?.imageUrl}
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
                    {data?.recruiter_jobs?.fullname && (
                        <div className={cx('description')}>
                            {data?.recruiter_jobs.fullname}
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
                                <span>
                                    {data?.city ? data?.city : data?.location}
                                </span>
                            </div>
                            <div className={cx('subdesc-item subdesc-right')}>
                                <div className={cx('subdesc-text')}>
                                    <ion-icon name="timer-outline"></ion-icon>
                                    <span>{data?.endDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <ModalPost
                handleClose={handleClose}
                show={show}
                onActionRequest={handleDeletedPost}
            />

            <div className={cx('subdesc-control')}>
                {data.recruiterId === userData.id && (
                    <>
                        <div
                            onClick={handleShow}
                            className={cx('subdesc-text')}
                        >
                            {deleted && (
                                <span className={cx('subdesc-text')}>
                                    {deleted}
                                </span>
                            )}
                            <span>{titleDeleted}</span>
                        </div>
                        <Link to={`/recruiter/recruiterpostjob/${data.id}`}>
                            <div className={cx('subdesc-text-repair')}>
                                {repair && (
                                    <span className={cx('subdesc-text')}>
                                        {repair}
                                    </span>
                                )}
                                <span>{titleRepair}</span>
                            </div>
                        </Link>
                    </>
                )}
                <div className={cx('subdesc-text-save')}>
                    <button
                        className={
                            isSaved ? cx('save-btn', 'active') : cx('save-btn')
                        }
                        onClick={handleSaveRecruitment}
                    >
                        {saved && (
                            <span className={cx('subdesc-text')}>
                                {isSaved ? (
                                    <ion-icon name="heart"></ion-icon>
                                ) : (
                                    saved
                                )}
                            </span>
                        )}
                        <span>{isSaved ? 'Hủy lưu' : titleSaved}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
