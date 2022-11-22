import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import ContentBlog from './ContentBlog/ContentBlog';
import SearchAdvance from '../RecruitmentPage/Search/SearchAdvance/SearchAdvance';

const cx = classNames.bind(styles);

export default function Blog() {
    return (
        <div className={cx('wrapper')}>
            <ContentBlog />
        </div>
    );
}
