import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardShowQuiz.module.scss';

const cx = classNames.bind(styles);

export default function CardShowQuiz({ quiz, to }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link')} to={to}>
                <div className={cx('image-block')}>
                    <img
                        className={cx('image')}
                        src={quiz?.thumbnail}
                        alt="anh quiz"
                    />
                </div>
                <div className={cx('information')}>
                    <div className={cx('title')}>{quiz?.title}</div>
                    <div className={cx('subdesc')}>
                        <div className={cx('subdesc-item subdesc-left')}>
                            <div className={cx('subdesc-text')}>
                            <ion-icon name="contract-outline"></ion-icon>
                                <span>{quiz?.maxScore}</span>
                            </div>
                            <div className={cx('subdesc-text')}>
                            <ion-icon name="time-outline"></ion-icon>
                                <span>{quiz?.timeQuiz}</span>
                            </div>
                            <div className={cx('subdesc-text')}>
                            <ion-icon name="list-outline"></ion-icon>
                                <span>{quiz?.listQuiz}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
