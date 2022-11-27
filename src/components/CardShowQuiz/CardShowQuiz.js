import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardShowQuiz.module.scss';

const cx = classNames.bind(styles);

export default function CardShowQuiz({ to, title, desc, img }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link')} to={to}>
                <div className={cx('image-block')}>
                    <img
                        className={cx('image')}
                        src={img?.form}
                        alt="anh quiz"
                    />
                </div>
                <div className={cx('information')}>
                    <div className={cx('title')}>{title?.title}</div>
                    <div className={cx('subdesc')}>
                        <div className={cx('subdesc-item subdesc-left')}>
                            <div className={cx('subdesc-text')}>
                                <ion-icon name="contract-outline"></ion-icon>
                                <span>{desc?.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
