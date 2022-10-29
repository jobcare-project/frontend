import classNames from 'classnames/bind';
import styles from './DisplayQuizz.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

const cx = classNames.bind(styles);

const quizData = [
    {
        id: '1',
        text: 'What is React?',
        options: [
            'A . React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
            'B . React is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
            'C . React is a programming language that conforms to the ECMAScript specification.',
        ],
        answer: 'A . React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
    },
    {
        id: '2',
        text: 'What are the major features of React?',
        options: [
            'A . It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.',
            'B . Supports server-side rendering, uses reusable/composable UI components to develop the view.',
            'C . A and B',
        ],
        answer: 'C . A and B',
    },
    {
        id: '3',
        text: 'Everything in React is a ...?',
        options: [
            'A . Module',
            'B . Component',
            'C . Class',
        ],
        answer: 'B . Component',
    },
    {
        id: '4',
        text: 'Keys are given to a list of elements in react. These keys should be -',
        options: [
            'A . Do not requires to be unique',
            'B . Unique in the DOM',
            'C . Unique among the siblings only',
        ],
        answer: 'C . Unique among the siblings only',
    },
    {
        id: '5',
        text: 'Who Develop React.js?',
        options: [
            'A . Facebook',
            'B . Apple',
            'C . Twitter',
        ],
        answer: 'A . Facebook',
    },
    {
        id: '6',
        text: 'Which of the following API is a MUST for every ReactJS component?',
        options: [
            'A . componentDidMount()',
            'B . renderComponent',
            'C . getInitialState',
        ],
        answer: 'B . renderComponent',
    },
];

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

function DisplayQuizz() {
    const [answer, setAnswer] = useState({});
    const [score, setScore] = useState(0);
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00');
    const [pause, setPause] = useState(false);
    const [show, setShow] = useState(false);

    const history = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { complete, score } = getResults(quizData, answer);

        pausetime();

        if (complete) {
            setScore(score);
        }
    };

    //time remaining

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

    const clearTimer = (e) => {
        setTimer('60:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 3600);
        return deadline;
    };

    const notime = () => {
        let deadline = new Date();
        deadline.setSeconds();
        return deadline;
    };

    const pausetime = () => {
        if (!pause) {
            clearInterval(Ref.current);
        } else {
            Ref.current = setInterval();
        }
        setPause((prev) => !prev);
    };

    useEffect(() => {
        // do some
        clearTimer(getDeadTime());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //time remaining

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('notification-bar')}>
                    <h5 className={cx('total-question-icon')}>
                        <ion-icon name="reader-outline"></ion-icon>
                    </h5>
                    <h5 className={cx('total-question')}>
                        {quizData.length} câu
                    </h5>

                    <h5 className={cx('time-icon')}>
                        <ion-icon name="time-outline"></ion-icon>
                    </h5>
                    <h5 className={cx('time')}>{timer}</h5>
                </div>
                <div className={cx('container')}>
                    {
                        <>
                            <h1 className={cx('quiz-heading')}>
                                Những câu hỏi phỏng vấn Front-End
                            </h1>

                            <form onSubmit={handleSubmit}>
                                {quizData.map((x) => {
                                    return (
                                        <div
                                            key={x.id}
                                            className={cx('quiz-item')}
                                        >
                                            <h3>
                                                {x.id} . {x.text}{' '}
                                            </h3>
                                            <div>
                                                {x.options.map(
                                                    (options, index) => (
                                                        <div
                                                            key={index}
                                                            className={cx(
                                                                'quiz-options',
                                                            )}
                                                        >
                                                            <input
                                                                type="radio"
                                                                value={options}
                                                                name={x.id}
                                                                checked={
                                                                    answer[
                                                                        x.id
                                                                    ] ===
                                                                    options
                                                                }
                                                                onChange={() =>
                                                                    setAnswer(
                                                                        (
                                                                            answer,
                                                                        ) => ({
                                                                            ...answer,
                                                                            [x.id]:
                                                                                options,
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
                                                                {options}
                                                            </label>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}

                                <Button
                                    type="submit"
                                    className={cx('submit')}
                                    variant="outline-success"
                                    onClick={() => setShow(true)}
                                >
                                    
                                    <div className={cx('text-submit')}>
                                        Submit<ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    
                                </Button>
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
                                        {quizData.length}
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
                                                {quizData.map((x) => {
                                                    return (
                                                        <div
                                                            key={x.id}
                                                            className={cx(
                                                                'quiz-item-after',
                                                            )}
                                                        >
                                                            <h3>
                                                                {x.id} .{' '}
                                                                {x.text}{' '}
                                                            </h3>
                                                            <div>
                                                                {x.answer}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Button
                                        className={cx('back-after')}
                                        variant="outline-secondary"
                                        onClick={() => history(-1)}
                                    >
                                        <div className={cx('back-after-text')}>
                                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                            Quay lại trang chủ
                                        </div>
                                    </Button>{' '}
                                    <Button
                                        className={cx('reload')}
                                        variant="outline-secondary"
                                        onClick={() => history(0)}
                                    >
                                        <div className={cx('reload-text')}>
                                        <ion-icon name="reload-circle-outline"  ></ion-icon>
                                            Làm lại
                                        </div>
                                    </Button>{' '}
                                </Modal.Body>
                            </Modal>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default DisplayQuizz;
