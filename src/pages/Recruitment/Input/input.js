import classNames from 'classnames/bind';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

function InputRecruitment() {
    return <input className={cx('wrapper')}>input</input>;
}

export default InputRecruitment;
