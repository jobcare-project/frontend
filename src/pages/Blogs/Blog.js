import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

export default function Blog() {
    return <div className={cx('wrapper')}>blog</div>;
}
