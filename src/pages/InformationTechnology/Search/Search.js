import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <button className={cx('clear')}>
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                    <ion-icon name="refresh-outline"></ion-icon>
                    <button className={cx('search-btn')}>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Search;
