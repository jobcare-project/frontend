import classNames from 'classnames/bind';
import styles from './ShowQuiz.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '~/config/Firebase/firebase';

import config from '~/config';
import Menu, { MenuItem } from '../Menu';
import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';

const cx = classNames.bind(styles);

function ShowQuiz() {
    const [quiz, setQuiz] = useState([]);
    const quizCollectionRef = collection(db, 'quiz');

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
    }, []);
    console.log(quiz)
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <h2 className={cx('heading')}>
                    {quiz.category}
                    <Menu>
                        <MenuItem title="Xem thêm" to={config.routes.itech} />
                    </Menu>
                </h2>

                <Row>
                    {quiz.slice(0, 8).map((quiz, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={quiz}
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
