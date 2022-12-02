import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Pagination.module.scss';

const cx = classNames.bind(styles);
const Posts = ({ posts }) => {
    return (
        <ul className={cx('list-group')}>
            {posts.map((post) => (
                <li key={post.id} className={cx('list-group-item')}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Posts;
