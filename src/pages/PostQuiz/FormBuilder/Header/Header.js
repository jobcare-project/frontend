import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const Header = ({ title, description, setTitle, setDescription }) => {
    return (
        <div>
            <div>
                <div className={cx('title-quiz')}>Tên bài quiz</div>
                <input
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nhập tên bài quiz"
                    name="title"
                    className={cx('input-title')}
                />
            </div>

            <div>
                <div className={cx('title-describe')}>Mô tả bài quiz</div>
                <input
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Nhập mô tả về quiz"
                    name="description"
                    className={cx('input-describe')}
                />
            </div>
        </div>
    );
};

export default Header;
