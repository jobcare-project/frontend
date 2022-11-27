import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';

import styles from './CardShowQuiz.module.scss';

const cx = classNames.bind(styles);

export default function CardShowQuiz({ to, quiz }) {
    console.log(quiz);
    return (
        <div className={cx('wrapper')}>
            <Link
                className={cx('link')}
                to={{ pathname:`displayquizz/${quiz.id}`}}
            >
                <div className={cx('image-block')}>
                    <img
                        className={cx('image')}
                        src={quiz?.form}
                        alt="anh quiz"
                    />
                </div>
                <div className={cx('information')}>
                    <div className={cx('title')}>{quiz?.title}</div>
                    <div className={cx('subdesc')}>
                        <div className={cx('subdesc-item subdesc-left')}>
                            <div className={cx('subdesc-text')}>
                                <ion-icon name="contract-outline"></ion-icon>
                                <span>{quiz?.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
