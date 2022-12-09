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
    addDoc,
    collection,
    getDoc,
    serverTimestamp,
    doc,
    updateDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    title: '',
    content: '',
};

const cx = classNames.bind(styles);

function PostBlog() {
    const [form, setForm] = useState(initialState);

    const { id } = useParams();

    const navigate = useNavigate();

    const { title, content } = form;

    useEffect(() => {
        id && getBlogDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getBlogDetail = async () => {
        const docRef = doc(db, 'blogs', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setForm({ ...snapshot.data() });
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title && window.confirm('Bạn có muốn đăng Blog này ?')) {
            if (!id) {
                try {
                    await addDoc(collection(db, 'blogs'), {
                        ...form,
                        timestamp: serverTimestamp(),
                    });
                    toast.success('Blog đã được tạo thành công');
                } catch (err) {
                    console.log(err);
                }
            } else {
                try {
                    await updateDoc(doc(db, 'blogs', id), {
                        ...form,
                        timestamp: serverTimestamp(),
                    });
                    toast.success('Blog đã được cập nhật thành công');
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            return toast.error('Hãy điền đầy đủ các trường');
        }

        navigate(-1);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h3 className={cx('heading-name')}>
                    <span className={cx('heading-text')}>
                        {id ? 'Update Blog' : 'Create Blog'}
                    </span>{' '}
                    Nơi chia sẻ và giúp đỡ nhau phát triển
                </h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={cx('content')}>
                    <div className={cx('title')}>
                        <input
                            secondary
                            className={cx('title-input')}
                            type="text"
                            placeholder="Nhập tên blog tại đây"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('content-blog')}>
                        <input
                            placeholder="Nhập nội dung blog tại đây"
                            className={cx('content-blog-input')}
                            value={content}
                            name="content"
                            onChange={handleChange}
                        />
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
