import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Pagination.module.scss';

const cx = classNames.bind(styles);
const NavPage = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={cx('pagination')}>
                {/* {pageNumbers.map((number) => {
                    <li key={number} className={cx('page-item')}>
                        <a className={cx('page-link')}>{number}</a>
                    </li>;
                })} */}
                {pageNumbers.map((number) => (
                    <li key={number} className={cx('page-item')}>
                        <a
                            onClick={() => paginate(number)}
                            href="!#"
                            className={cx('page-link')}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavPage;
