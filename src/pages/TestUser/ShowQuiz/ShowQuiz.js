import classNames from 'classnames/bind';
import styles from './ShowQuiz.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {
    collection,
    onSnapshot,
    getDoc,
    serverTimestamp,
    doc,
    addDoc,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { accountsDataSelector } from '~/redux/Selectors/authSelector';
import { db } from '~/config/Firebase/firebase';

import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import Loading from '~/components/Loading/Loading';
import Filter from '../Filter';

const cx = classNames.bind(styles);

function ShowQuiz() {
    ////State quiz from firebase
    const [quiz, setQuiz] = useState([]);
    //State when get API from firebase
    const [loading, setLoading] = useState(true);
    //
    const [filtered, setFiltered] = useState([]);
    //
    const [activeGenre, setActiveGenre] = useState(0);
    //State when get API from firebase
    const quizCollectionRef = collection(db, 'quiz');
    const userData = useSelector(accountsDataSelector);
    const { id } = useParams();
    //Firebase snapShot
    useEffect(() => {
        onSnapshot(quizCollectionRef, (snapshot) => {
            setQuiz(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
            setFiltered(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        viewing: false,
                        ...doc.data(),
                    };
                }),
            );
            setLoading(false);
        });
    }, []);
    useEffect(() => {
        id && getQuizDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getQuizDetail = async () => {
        const docRef = doc(db, 'savepostquiz', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setQuiz({ ...snapshot.data() });
        }
    };
    const handleSave = async (item) => {
        quiz.map((i) => {
            if (i == item) {
                i = true;
            }
        });
        if (!id) {
            try {
                await addDoc(collection(db, 'savepostquiz'), {
                    item,
                    userData,
                    timestamp: serverTimestamp(),
                });
                toast.success('Đã lưu vào mục yêu thích của bạn');
            } catch (err) {
                console.log(err);
            }
        }
    };
    // const handleDelete = async (id) => {
    //     if (window.confirm('Bạn có muốn xóa bài quiz ?')) {
    //         try {
    //             setLoading(true);
    //             await deleteDoc(doc(db, 'quiz', id));
    //             toast.success('Bài quiz đã được xóa thành công');
    //             setLoading(false);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // };
    return loading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <h2 className={cx('heading')}>
                    <Filter
                        quiz={quiz}
                        setFiltered={setFiltered}
                        activeGenre={activeGenre}
                        setActiveGenre={setActiveGenre}
                    />
                </h2>
                <Row>
                    {filtered.slice(0, 8).map((quiz, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={quiz}
                                    // handleDelete={handleDelete}
                                    // iconDelete={quiz}
                                    // iconRepair={quiz}
                                    // titlRepair="Sửa"
                                    // titlDelete="Xóa"
                                    titleSaved="Lưu"
                                    handleSaved={handleSave}
                                ></CardShowQuiz>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default ShowQuiz;
