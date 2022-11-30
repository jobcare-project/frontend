import classNames from 'classnames/bind';
import styles from './PostBlog.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input/Input/Input';
import EditorContent from '../EditorContent/EditorContent';
import { Container } from 'react-bootstrap';

import { db } from '~/config/Firebase/firebase';
import { useState, useEffect } from 'react';
import {
    collection,
    onSnapshot,
    doc,
    addDoc,
    deleteDoc,
} from 'firebase/firestore';

const cx = classNames.bind(styles);

const handleChange = () => {};
function PostBlog() {
    const [form, setForm] = useState({
        title: '',
        content: '',
    });
    const blogCollectionRef = collection(db, 'blog');

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(blogCollectionRef, form);
    };

    return (
        <div className={cx('wrapper')} onSubmit={handleSubmit}>
            <form>
                <div className={cx('heading')}>
                    <h3 className={cx('heading-name')}>
                        <span className={cx('heading-text')}>BLOG !!</span> Nơi
                        chia sẻ và giúp đỡ nhau phát triển
                    </h3>
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>
                        <input
                            placeholder="Tiêu đề"
                            type="text"
                            value={form.title}
                            onChange={(e) =>
                                setForm({ ...form, title: e.target.value })
                            }
                        />
                    </div>
                    <div className={cx('content-blog')}>
                        {/* <input
                            placeholder="Nội dung ..."
                            type="text"
                            value={form.content}
                            onChange={(e) =>
                                setForm({ ...form, content: e.target.value })
                            }
                        /> */}
                        <EditorContent />
                    </div>
                </div>
                <div className={cx('btn')}>
                    <Button primary small>
                        Xuất bản
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default PostBlog;
