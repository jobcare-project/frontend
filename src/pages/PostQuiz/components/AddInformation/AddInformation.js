import classNames from 'classnames/bind';
import styles from './AddInformation.module.scss';

import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';

import Button from '~/components/Button';
import Input from '~/components/Input/Input/Input';

const cx = classNames.bind(styles);

function AddInformation() {
    const [, setInformation] = useState([]);
    const [form, setForm] = useState({
        title: '',
        desc: '',
        category: '',
    });

    const categoryOption = [
        'Công nghệ thông tin',
        'Marketing',
        'Quản trị kinh doanh',
        'Ngôn ngữ học',
    ];

    const informationCollectionRef = collection(db, 'information');

    useEffect(() => {
        onSnapshot(informationCollectionRef, (snapshot) => {
            setInformation(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
        });
    }, [informationCollectionRef, form]);

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.desc || !form.category) {
            alert('Please fill out all fields');
            return;
        }

        addDoc(informationCollectionRef, form);
    };

    return (
        <div>
            <div className="wrapper">
                <div className={cx('section')}>
                    {
                        <div className="popup">
                            <div>
                                <div className={cx('information')}>
                                    Thông tin về quiz
                                </div>
                                <form onSubmit={handleSubmit}>
                                     <div className={cx('category')}>
                                    <select
                                        value={form.category}
                                        onChange={onCategoryChange}
                                        className={cx('dropdown')}
                                    >
                                        <option>Bạn hãy chọn lĩnh vực về bài Quiz của bạn</option>
                                        {categoryOption.map((option, index) => (
                                            <option
                                                value={option || ''}
                                                key={index}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                    <div>
                                        <div className={cx('title-quiz')}>
                                            Tên bài quiz
                                        </div>
                                        <Input
                                            className={cx('input-title-quiz')}
                                            type="text"
                                            value={form.title}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    title: e.target.value,
                                                })
                                            }
                                            placeholder="Nhập tên bài quiz ở đây"
                                        />
                                    </div>
                                    <div>
                                        <div className={cx('title-describe')}>
                                            Mô tả bài quiz
                                        </div>
                                        <Input
                                            className={cx('input-describe')}
                                            type="text"
                                            value={form.desc}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    desc: e.target.value,
                                                })
                                            }
                                            placeholder="Nhập mô tả bài quiz ở đây"
                                        />
                                    </div>

                                    <div className={cx('submit-btn')}>
                                        <Button primary type="submit">
                                            Lưu
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default AddInformation;
