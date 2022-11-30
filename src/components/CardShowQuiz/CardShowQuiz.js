import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalPost from '../Modal/ModalDeleted/ModalDeleted';
import { fetchDeletedJobDesc } from '~/pages/Recruiter/recruiterSlice';
import images from '~/assets/images';

import styles from './CardShowQuiz.module.scss';

const cx = classNames.bind(styles);

export default function CardShowQuiz({
    to,
    quiz,
    deleted,
    repair,
    saved,
    titleDeleted = '',
    titlRepair = '',
    titleSaved = '',
    onDelete,
    id,
}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleDeletedPost = (id) => {
        dispatch(fetchDeletedJobDesc(quiz.id));
    };
    console.log(quiz);
    return (
        <>
            <div className={cx('wrapper')}>
                <Link
                    className={cx('link')}
                    to={{ pathname: `displayquizz/${quiz.id}` }}
                >
                    <div className={cx('image-block')}>
                        {quiz?.form ? (
                            <img
                                className={cx('image')}
                                src={quiz?.form}
                                alt="anh quiz"
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
                        <div className={cx('title')}>{quiz?.title}</div>
                        {quiz?.description && (
                            <div className={cx('description')}>
                                {quiz?.description}
                            </div>
                        )}
                        {quiz.recruiter_jobs?.fullname && (
                            <div className={cx('description')}>
                                {quiz.recruiter_jobs.fullname}
                            </div>
                        )}
                        <div className={cx('subdesc')}>
                            <div className={cx('subdesc-item subdesc-left')}>
                                <div
                                    className={cx('subdesc-item subdesc-right')}
                                >
                                    <div className={cx('subdesc-text')}>
                                        <ion-icon name="timer-outline"></ion-icon>
                                        <span>{quiz?.createAt}</span>
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
                    <div onClick={handleShow} className={cx('subdesc-text')}>
                        {deleted && (
                            <span className={cx('subdesc-text')}>
                                {deleted}
                            </span>
                        )}
                        <span>{titleDeleted}</span>
                    </div>

                    <Link>
                        <div className={cx('subdesc-text-repair')}>
                            {repair && (
                                <span className={cx('subdesc-text')}>
                                    {repair}
                                </span>
                            )}
                            <span>{titlRepair}</span>
                        </div>
                    </Link>
                    <div className={cx('subdesc-text-save')}>
                        {saved && (
                            <span className={cx('subdesc-text')}>{saved}</span>
                        )}
                        <span>{titleSaved}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
