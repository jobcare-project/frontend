import styles from './Blog.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Blog() {
  return <div className={cx('wrapper')}>Blog</div>;
}
