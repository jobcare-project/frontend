import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SearchResults.module.scss';

const cx = classNames.bind(styles);

function SearchResults({ data }) {
    return (
        <ul className={cx('wrapper')}>
            {data.map((item) => (
                <li key={item.id} className={cx('result-item')}>
                    <Link>
                        <div>{item.title}</div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;
