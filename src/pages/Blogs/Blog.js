import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import Search from '../RecruitmentPage/Search/Search';
import ContentBlog from './ContentBlog/ContentBlog';

const cx = classNames.bind(styles);

export default function Blog() {
    return (
        <div className={cx('wrapper')}>
            <Search />
            <ContentBlog />
        </div>
    );
}
