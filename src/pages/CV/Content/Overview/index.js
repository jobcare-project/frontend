import classNames from 'classnames/bind';
import { TitleLarge } from '../../styledComponents/Title';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <div className={cx('wrapper')}>
            <TitleLarge>Phạm Anh Tuấn</TitleLarge>
        </div>
    );
}

export default Overview;
