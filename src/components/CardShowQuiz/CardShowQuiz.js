import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardShowQuiz.module.scss';

const cx = classNames.bind(styles);

export default function CardShowQuiz({
    quiz,
    handleSaved,
    titlRepair = '',
    titlDelete = '',
    titlRank = '',
    iconRepair,
    iconDelete,
    iconRank,
    titleSaved = '',
    handleDelete,
    iconSave
}) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Link
                    className={cx('link')}
                    to={{ pathname: `/testuser/displayquizz/${quiz.id}` }}
                >
                    <div className={cx('image-block')}>
                        <img
                            className={cx('image')}
                            src={quiz?.image}
                            alt="anh quiz"
                        />
                    </div>
                    <div className={cx('information')}>
                        <div className={cx('title')}>{quiz?.title}</div>
                        {quiz?.description && (
                            <div className={cx('description')}>
                                {quiz?.description}
                            </div>
                        )}
                        {quiz?.recruiter_jobs?.fullname && (
                            <div className={cx('description')}>
                                {quiz?.recruiter_jobs.fullname}
                            </div>
                        )}
                        <div className={cx('subdesc')}>
                            <div className={cx('subdesc-item subdesc-left')}>
                                <div
                                    className={cx('subdesc-item subdesc-right')}
                                >
                                    <div className={cx('subdesc-text')}>
                                        <ion-icon name="timer-outline"></ion-icon>
                                        <span>
                                            {quiz.timestamp
                                                .toDate()
                                                .toDateString()}
                                        </span>
                                    </div>
                                    <div className={cx('subdesc-text')}>
                                        <ion-icon name="book-outline"></ion-icon>
                                        <span>
                                            T???ng c??u h???i{' '}
                                            {quiz?.questions.length} c??u
                                        </span>
                                    </div>
                                    <div className={cx('subdesc-text')}>
                                        <ion-icon name="hourglass-outline"></ion-icon>
                                        <span>Th???i gian l??m b??i ph??t</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className={cx('subdesc-control')}>
                    <div className={cx('subdesc-text')}>
                        <span onClick={() => handleDelete(quiz.id)}>
                            {' '}
                            {/* <ion-icon name="trash-outline"></ion-icon>  */}
                            {iconDelete && (
                                <ion-icon name="trash-outline"></ion-icon>
                            )}
                            {titlDelete}
                        </span>
                    </div>
                    <Link
                        to={{
                            pathname: `/leaderboard/${quiz.id}`,
                        }}
                    >
                        <div className={cx('subdesc-text-repair')}>
                            {iconRank && (
                                <ion-icon name="people-outline"></ion-icon>
                            )}
                            <span>{titlRank}</span>
                        </div>
                    </Link>

                    <Link
                        to={{
                            pathname: `/recruiter/recruiterpost/postquiz/${quiz.id}`,
                        }}
                    >
                        <div className={cx('subdesc-text-repair')}>
                            {iconRepair && (
                                <ion-icon name="build-outline"></ion-icon>
                            )}
                            <span>{titlRepair}</span>
                        </div>
                    </Link>

                    <div className={cx('subdesc-text-save')}>
                        <span onClick={() => handleSaved(quiz.id)}>
                            {iconSave && (
                                <ion-icon name="heart-outline"></ion-icon>
                            )}
                            {titleSaved}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
