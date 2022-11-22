import classNames from 'classnames/bind';
import styles from './PostBlog.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input/Input/Input';
import EditorContent from '../EditorContent/EditorContent';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

const handleChange = () => {};
function PostBlog() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h3 className={cx('heading-name')}>
                    <span className={cx('heading-text')}>BLOG !!</span> Nơi chia
                    sẻ và giúp đỡ nhau phát triển
                </h3>
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <Input
                        secondary
                        placeholder="Tiêu đề"
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('content-blog')}>
                    <EditorContent />
                </div>
            </div>
            <div className={cx('btn')}>
                <Button primary small>
                    Xuất bản
                </Button>
            </div>
        </div>
    );
}

export default PostBlog;
