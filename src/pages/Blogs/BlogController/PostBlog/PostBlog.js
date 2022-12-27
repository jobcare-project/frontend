import classNames from 'classnames/bind';
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

import TextEditor from '../../EditorContent/EditorContent';
import styles from './PostBlog.module.scss';
import Button from '~/components/Button';

const initialState = {
    title: '',
    content: '',
};

const cx = classNames.bind(styles);

function PostBlog() {
    const [form, setForm] = useState(initialState);

    const { id } = useParams();

    const navigate = useNavigate();

    const { title } = form;

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
    const setContent = (value) => {
        setForm({ ...form, content: value });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h3 className={cx('heading-name')}>
                    <span className={cx('heading-text')}>
                        {id ? 'Blog' : 'Blog'}
                    </span>{' '}
                    Nơi chia sẻ và giúp đỡ nhau phát triển
                </h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={cx('content')}>
                    <input
                        className={cx('input-title')}
                        placeholder="Tiêu đề"
                        type="text"
                        value={form.title}
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                    />
                    <div className={cx('content-blog')}>
                        <TextEditor
                            setContentBlog={setContent}
                            sHidderTools={false}
                            set
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
