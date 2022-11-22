import classNames from 'classnames/bind';
import styles from './BlogPost.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input/Input/Input';
import EditorContent from '../EditorContent/EditorContent';
import { Container } from 'react-bootstrap';

import { db } from '../firebase';
import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';

const cx = classNames.bind(styles);

function BlogPost() {
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
        <div className={cx('wrapper')}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={cx('heading')}>
                        <h3 className={cx('heading-name')}>
                            <span className={cx('heading-text')}>BLOG !!</span>{' '}
                            Nơi chia sẻ và giúp đỡ nhau phát triển
                        </h3>
                    </div>
                    <div className={cx('content')}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={form.title}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        title: e.target.value,
                                    })
                                }
                                placeholder="Nhập tên blog tại đây"
                            />
                        </div>
                    </div>
                    <div className={cx('content-blog')}>
                        <input
                            value={form.content}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    content: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={cx('btn')}>
                        <Button primary small>
                            Xuất bản
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BlogPost;
// function App() {
//     return (
//         <div className="App">
//             <h1>My recipes</h1>

//             <div className="popup">
//                 <div className="popup-inner">
//                     <h2>Add a new recipe</h2>

//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label>Title</label>
//                             <input
//                                 type="text"
//                                 value={form.title}
//                                 onChange={(e) =>
//                                     setForm({
//                                         ...form,
//                                         title: e.target.value,
//                                     })
//                                 }
//                             />
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;
