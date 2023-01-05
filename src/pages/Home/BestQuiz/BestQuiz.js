/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
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
import { useParams } from 'react-router-dom';

import styles from './BestQuiz.module.scss';
import { accountsDataSelector } from '~/redux/Selectors/authSelector';
import { db } from '~/config/Firebase/firebase';
import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';

const cx = classNames.bind(styles);

function ShowQuiz() {
    const [quiz, setQuiz] = useState([]);
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
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const handleSave = async () => {
        if (!id) {
            try {
                await addDoc(collection(db, 'savepostquiz'), {
                    quiz,
                    userData,
                    timestamp: serverTimestamp(),
                });
                toast.success('Đã lưu vào mục yêu thích của bạn');
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <h2 className={cx('heading-job')}>
                    Các bài quiz được truy cập nhiều nhất
                </h2>
                <Row>
                    {quiz.slice(0, 8).map((quiz, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={quiz}
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
