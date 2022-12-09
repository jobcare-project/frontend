import classNames from 'classnames/bind';
import styles from './DisplayIT.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '~/config/Firebase/firebase';
import Loading from '~/components/Loading/Loading';

const cx = classNames.bind(styles);

export default function DisplayIT() {
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
    return loading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <Container>
                <div className={cx('inner')}>
                    <img
                        className={cx('avatar-infomationtechnology')}
                        src="https://www.aeccglobal.com.np/images/easyblog_articles/247/b2ap3_amp_top-information-technology-courses-in-australia.png"
                        alt="something-img"
                    />
                    <div className={cx('describe')}>
                        <p className={cx('heading-informationtechnology')}>
                            Công nghệ thông tin
                        </p>
                        <p className={cx('title-informationtechnology')}>
                            Dưới đây là những quizz phổ biến nhất để bạn luyện
                            tập chuẩn bị cho cuộc phỏng vấn sắp tới !
                        </p>
                    </div>
                </div>
                <Row>
                    {quiz.slice(0, 8).map((quiz, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={quiz}
                                    // deleted={}
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
