import classNames from 'classnames/bind';
import styles from './AddInformation.module.scss';

import { db, storage } from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { Col, Row } from 'react-bootstrap';

import Button from '~/components/Button';
import Input from '~/components/Input/Input/Input';
import DropDown from '~/components/Input/DropDown/DropDown';

const cx = classNames.bind(styles);

function AddInformation() {
    const [, setInformation] = useState([]);
    const [file, setFile] = useState(null);
    const [, setProgress] = useState(null);
    const [form, setForm] = useState({
        title: '',
        desc: '',
        category: '',
    });

    const categoryOption = [
        {
            value: '',
            name: 'Công nghệ thông tin',
        },
        {
            value: '1',
            name: 'Marketing',
        },
        {
            value: '2',
            name: 'Quản trị kinh doanh',
        },
        {
            value: '3',
            name: 'Ngôn ngữ học',
        },
    ];

    const informationCollectionRef = collection(db, 'quiz');

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

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setProgress(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadUrl) => {
                            setForm((prev) => ({
                                ...prev,
                                imgUrl: downloadUrl,
                            }));
                        },
                    );
                },
            );
        };

        file && uploadFile();
    }, [file]);

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
                                        <div
                                            value={form.category}
                                            onChange={onCategoryChange}
                                        >
                                            <div>
                                                Bạn hãy chọn lĩnh vực về bài
                                                Quiz của bạn
                                            </div>
                                            <Row lg={4}>
                                                <Col>
                                                    <div
                                                        className={cx(
                                                            'dropdown',
                                                        )}
                                                    >
                                                        <DropDown
                                                            data={
                                                                categoryOption
                                                            }
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
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
                                    <div>
                                        <div className={cx('title-image')} >Chọn ảnh đại diện</div>
                                        <input
                                            type="file"
                                            className={cx('image')}
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
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
