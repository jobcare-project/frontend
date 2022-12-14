import classNames from 'classnames/bind';
import styles from './ShowQuizRecuiter.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {
    collection,
    onSnapshot,
    doc,
    deleteDoc,
    query,
    where,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { accountsDataSelector } from '~/redux/Selectors/authSelector';

import { db } from '~/config/Firebase/firebase';

import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import Loading from '~/components/Loading/Loading';
import Filter from '../Filter';

const cx = classNames.bind(styles);

function ShowQuizRecuiter() {
    ////State quiz from firebase
    const [quiz, setQuiz] = useState([]);
    //State when get API from firebase
    const [loading, setLoading] = useState(true);
    //
    const [filtered, setFiltered] = useState([]);

    const userData = useSelector(accountsDataSelector);
    //
    const [activeGenre, setActiveGenre] = useState(0);
    //State when get API from firebase
    const quizCollectionRef = query(
        collection(db, 'quiz'),
        where('userData.id', '==', userData.id),
    );
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
    console.log(quiz);
    const handleDelete = async (id) => {
        if (window.confirm('B???n c?? mu???n x??a b??i quiz ?')) {
            try {
                setLoading(true);
                await deleteDoc(doc(db, 'quiz', id));
                toast.success('B??i quiz ???? ???????c x??a th??nh c??ng');
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
                                    handleDelete={handleDelete}
                                    iconDelete={quiz}
                                    iconRepair={quiz}
                                    iconRank={quiz}
                                    titlRepair="S???a"
                                    titlDelete="X??a"
                                    titlRank="Rank"
                                ></CardShowQuiz>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default ShowQuizRecuiter;
