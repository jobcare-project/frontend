import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

export default function Card({ data, to }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link')} to={to}>
                    
                

                <div className={cx('image-block')}>
                    <img
                        className={cx('image')}
                        src={data?.thumbnail}
                        alt="anh nha tuyen dung"
                    />
                </div>
                <div className={cx('information')}>
                    <div className={cx('title')}>{data?.title}</div>
                    <div className={cx('description')}>{data?.description}</div>
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
                            <div className={cx('subdesc-text')}>
                                <ion-icon name="timer-outline"></ion-icon>
                                <span>{data?.createAt}</span>
                            </div>
                        </div>
                        <div className={cx('subdesc-item subdesc-right')}>
                            {/* <div className={cx('subdesc-text')}>
                                <ion-icon name="timer-outline"></ion-icon>
                                <span>{data?.createAt}</span>
                            </div> */}
                            {/* <span>{data?.createAt}</span> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
