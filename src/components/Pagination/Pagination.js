import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
import NavPage from './NavPage/NavPage';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);
const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/posts',
            );
            setPosts(res.data);
        };
        fetchPosts();
    }, []);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className={cx('wrapper')}>
            <h1>My blog</h1>
            <Posts posts={currentPosts} />
            <NavPage
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            ></NavPage>
        </div>
    );
};

export default Pagination;
