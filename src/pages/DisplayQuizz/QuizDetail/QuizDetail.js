import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { Container} from 'react-bootstrap';
import styles from './QuizDetail.module.scss';
import Button from '~/components/Button';
import Loading from '~/components/Loading/Loading';


import { db } from '~/config/Firebase/firebase';

const cx = classNames.bind(styles);

//get quiz scores
const getResults = (questions, answers) => {
    let complete = true;
    let score = 0;

    questions.forEach((question) => {
        const givenAnswer = answers[question.id];

        if (givenAnswer === question.answer) {
            score++;
        }
    });

    return {
        score,
        complete,
    };
};

function QuizDetail() {
    //get id from firebase from useParams
    const { id } = useParams();
    //State quiz from firebase
    const [quiz, setQuiz] = useState(null);
    //State answer of quiz
    const [answer, setAnswer] = useState({});
    //state Scoring of the quiz
    const [score, setScore] = useState(0);
    //get ref from react
    const Ref = useRef(null);
    // State create reverse night time
    const [timer, setTimer] = useState('00:00');
    //State quiz time out
    const [pause, setPause] = useState(false);
    //State show form when complete quiz
    const [show, setShow] = useState(false);
    //State when get API from firebase
    const [loading, setLoading] = useState(true);

    // Detail quiz
    useEffect(() => {
        id && getQuizDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    //Function detail quiz
    const getQuizDetail = async () => {
        const docRef = doc(db, 'quiz', id);
        const quizDetail = await getDoc(docRef);

        setQuiz(quizDetail.data());
        setLoading(false);
    };

    //Function leve page
    const history = useNavigate();

    //Function Submit Quiz and scoring
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { complete, score } = getResults(quiz?.questions, answer);

        pausetime();

        if (complete) {
            setScore(score);
        }
    };
    //Function time remaining

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);

        return {
            total,
            minutes,
            seconds,
        };
    };

    //Function start quiz time
    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) +
                    ':' +
                    (seconds > 9 ? seconds : '0' + seconds),
            );
        }
        if (total < 0) {
            alert('Hết giờ');
            clearTimer(notime());
            setShow(true);
            setScore(score);
        }
    };

    //Function unit 1 second
    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    //Function total quiz time
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 3600);
        return deadline;
    };

    //Function quiz time out
    const notime = () => {
        let deadline = new Date();
        deadline.setSeconds();
        return deadline;
    };

    //Function stop time when completing quiz
    const pausetime = () => {
        if (!pause) {
            clearInterval(Ref.current);
        } else {
            Ref.current = setInterval();
        }
        setPause((prev) => !prev);
    };
    //time remaining
    useEffect(() => {
        // do some
        clearTimer(getDeadTime());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <Container>
            <div className={cx('wrapper')}>
            <div className={cx('time-quiz')}>
                <div className={cx('notification-bar')}>
                    <h5 className={cx('total-question-icon')}>
                        <ion-icon name="reader-outline"></ion-icon>
                    </h5>
                    <h5 className={cx('total-question')}>
                        {quiz?.questions.length} câu
                    </h5>
                    <h5 className={cx('time-icon')}>
                        <ion-icon name="time-outline"></ion-icon>
                    </h5>
                    <h5 className={cx('time')}>{timer}</h5>
                </div>
            </div>
            <div className={cx('information')}>
                <div className={cx('quiz-heading')}>
                    <div className={cx('title')}>{quiz?.title}</div>
                    <div className={cx('desc')}>{quiz?.description}</div>
                </div>
            </div>

            <div className={cx('container')}>
                {
                    <>
                        <form onSubmit={handleSubmit}>
                            {quiz?.questions.map((x, index) => {
                                return (
                                    <div
                                        key={x?.id}
                                        className={cx('quiz-item')}
                                    >
                                        <h3>
                                            {index + 1} . {x?.question}{' '}
                                        </h3>
                                        <div>
                                            {x.options?.map(
                                                (options, index) => (
                                                    <div
                                                        key={index}
                                                        className={cx(
                                                            'quiz-options',
                                                        )}
                                                    >
                                                        <input
                                                            type="radio"
                                                            value={
                                                                options.value
                                                            }
                                                            name={x?.id}
                                                            checked={
                                                                answer[
                                                                    x?.id
                                                                ] ===
                                                                options.value
                                                            }
                                                            onChange={() =>
                                                                setAnswer(
                                                                    (
                                                                        answer,
                                                                    ) => ({
                                                                        ...answer,
                                                                        [x?.id]:
                                                                            options.value,
                                                                    }),
                                                                )
                                                            }
                                                        />
                                                        <label
                                                            className={cx(
                                                                'option',
                                                            )}
                                                        >
                                                            {' '}
                                                            {options.value}
                                                        </label>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            <div className={cx('submit-btn')}>
                                <Button
                                    primary
                                    type="submit"
                                    className={cx('submit')}
                                    variant="outline-success"
                                    onClick={() => setShow(true)}
                                >
                                    <div className={cx('text-submit')}>
                                        Submit
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                </Button>
                            </div>
                        </form>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    <div className={cx('modal-title')}>
                                        Chúc mừng bạn đã hoàn thành bài Quiz
                                    </div>
                                    <div className={cx('warning-title')}>
                                        Lưu ý : Khi hết thời gian làm bài hệ
                                        thống sẽ không chấm điểm
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={cx('modal-body')}>
                                <p className={cx('show-score')}>
                                    Điểm của bạn là {score} /{' '}
                                    {quiz?.questions.length}
                                </p>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <p
                                                className={cx(
                                                    'accordion-header',
                                                )}
                                            >
                                                {' '}
                                                Xem đáp án{' '}
                                            </p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {quiz?.questions.map((x, index) => {
                                                return (
                                                    <div
                                                        key={x.id}
                                                        className={cx(
                                                            'quiz-item',
                                                        )}
                                                    >
                                                        <h3>
                                                            {index + 1} .{' '}
                                                            {x?.question}{' '}
                                                        </h3>
                                                        <div>{x.answer}</div>
                                                    </div>
                                                );
                                            })}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Button
                                    primary
                                    className={cx('back-after')}
                                    onClick={() => history(-1)}
                                >
                                    <div className={cx('back-after-text')}>
                                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                        Quay lại trang chủ
                                    </div>
                                </Button>{' '}
                                <Button
                                    primary
                                    className={cx('reload')}
                                    onClick={() => history(0)}
                                >
                                    <div className={cx('reload-text')}>
                                        <ion-icon name="reload-circle-outline"></ion-icon>
                                        Làm lại
                                    </div>
                                </Button>{' '}
                            </Modal.Body>
                        </Modal>
                    </>
                }
            </div>
        </div>
        </Container>
    );
}

export default QuizDetail;
