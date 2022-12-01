import classNames from 'classnames/bind';
import styles from './ShowQuiz.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { toast } from "react-toastify";

import { db } from '~/config/Firebase/firebase';

import config from '~/config';
import Menu, { MenuItem } from '../Menu';
import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import Loading from '~/components/Loading/Loading';

const cx = classNames.bind(styles);

function ShowQuiz() {
    ////State quiz from firebase
    const [quiz, setQuiz] = useState([]);
    //State when get API from firebase
    const [loading, setLoading] = useState(true);
    //State when get API from firebase
    const quizCollectionRef = collection(db, 'quiz');
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
            setLoading(false);
        });
    }, []);
    console.log(quiz);
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure wanted to delete that blog ?')) {
            try {
                setLoading(true);
                await deleteDoc(doc(db, 'quiz', id));
                toast.success('Blog deleted successfully');
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
    };
    return loading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <h2 className={cx('heading')}>
                    {quiz?.formData}
                    <Menu>
                        <MenuItem
                            title="Xem thêm"
                            to={config.routes.informationtechnology}
                        />
                    </Menu>
                </h2>

                <Row>
                    {quiz.slice(0, 8).map((quiz, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={quiz}
                                    handleDelete={handleDelete}
                                    titleDeleted="Xóa"
                                    // repair={}
                                    titlRepair="Sửa"
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
