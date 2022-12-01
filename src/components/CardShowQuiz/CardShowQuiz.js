import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardShowQuiz.module.scss';

const cx = classNames.bind(styles);

export default function CardShowQuiz({
    to,
    quiz,
    repair,
    saved,
    titlRepair = '',
    titleSaved = '',
    handleDelete,
}) {
    console.log(quiz);
    return (
        <>
            <div className={cx('wrapper')}>
                <Link
                    className={cx('link')}
                    to={{ pathname: `displayquizz/${quiz.id}` }}
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
                                        <span>
                                            {quiz.timestamp.toDate().toDateString()}
                                        </span>
                                    </div>
                                    <div className={cx('subdesc-text')}>
                                        <ion-icon name="book-outline"></ion-icon>
                                        <span>{quiz?.data.length} câu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className={cx('subdesc-control')}>
                    <div className={cx('subdesc-text')}>
                        <span onClick={() => handleDelete(quiz.id)}>Xóa</span>
                    </div>

                    <Link to={`/update/${quiz.id}`} >
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
