import classNames from 'classnames/bind';
import InputRecruitment from './Input/input';
import styles from './Recruitment.module.scss';
const cx = classNames.bind(styles);

function Recruitment() {
    return (
        <div>
            <div className={cx('from-group')}>
                <label htmlFor="">Nhập mức lương</label>
                <InputRecruitment></InputRecruitment>
            </div>
        </div>
    );
}

export default Recruitment;
