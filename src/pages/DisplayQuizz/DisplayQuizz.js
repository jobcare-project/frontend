import classNames from 'classnames/bind';
import styles from './DisplayQuizz.module.scss';
import Sidebar from './Sidebar';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Questions = [
    {
        id: 0,
        questionText: 'What is React?',
        answerOptions: [
            {
                answerText:
                    'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
                isCorrect: true,
                option: 'A',
            },
            {
                answerText:
                    'React is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
                isCorrect: false,
                option: 'B',
            },
            {
                answerText:
                    'React is a programming language that conforms to the ECMAScript specification.',
                isCorrect: false,
                option: 'C',
            },
        ],
    },
    {
        id: 1,
        questionText: 'What are the major features of React?',
        answerOptions: [
            {
                answerText:
                    'It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.',
                isCorrect: false,
                option: 'A',
            },
            {
                answerText:
                    'Supports server-side rendering, uses reusable/composable UI components to develop the view.',
                isCorrect: false,
                option: 'B',
            },
            {
                answerText: 'A and B',
                isCorrect: true,
                option: 'C',
            },
        ],
    },
    {
        id: 2,
        questionText: 'Everything in React is a ...?',
        answerOptions: [
            {
                answerText: 'Module',
                isCorrect: false,
                option: 'A',
            },
            {
                answerText: 'Component',
                isCorrect: true,
                option: 'B',
            },
            {
                answerText: 'Class',
                isCorrect: false,
                option: 'C',
            },
        ],
    },
    {
        id: 3,
        questionText:
            'Keys are given to a list of elements in react. These keys should be -',
        answerOptions: [
            {
                answerText: 'Do not requires to be unique',
                isCorrect: false,
                option: 'A',
            },
            {
                answerText: 'Unique in the DOM',
                isCorrect: false,
                option: 'B',
            },
            {
                answerText: 'Unique among the siblings only',
                isCorrect: true,
                option: 'C',
            },
        ],
    },
    {
        id: 4,
        questionText: 'Who Develop React.js?',
        answerOptions: [
            {
                answerText: 'Facebook',
                isCorrect: true,
                option: 'A',
            },
            {
                answerText: 'Apple',
                isCorrect: false,
                option: 'B',
            },
            {
                answerText: 'Twitter',
                isCorrect: false,
                option: 'C',
            },
        ],
    },
    {
        id: 5,
        questionText:
            'Which of the following API is a MUST for every ReactJS component?',
        answerOptions: [
            {
                answerText: 'componentDidMount()',
                isCorrect: false,
                option: 'A',
            },
            {
                answerText: 'renderComponent',
                isCorrect: true,
                option: 'B',
            },
            {
                answerText: 'getInitialState',
                isCorrect: false,
                option: 'C',
            },
        ],
    },
];

const QuestionsAnswer = [
    {
        id: 0,
        questionText: 'What is React?',
        answerOptions: [
            {
                answerText:
                    'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
                isCorrect: true,
                option: 'A',
            },
        ],
    },
    {
        id: 1,
        questionText: 'What are the major features of React?',
        answerOptions: [
            {
                answerText: 'A and B',
                isCorrect: true,
                option: 'C',
            },
        ],
    },
    {
        id: 2,
        questionText: 'Everything in React is a ...?',
        answerOptions: [
            {
                answerText: 'Component',
                isCorrect: true,
                option: 'B',
            },
        ],
    },
    {
        id: 3,
        questionText:
            'Keys are given to a list of elements in react. These keys should be -',
        answerOptions: [
            {
                answerText: 'Unique among the siblings only',
                isCorrect: true,
                option: 'C',
            },
        ],
    },
    {
        id: 4,
        questionText: 'Who Develop React.js?',
        answerOptions: [
            {
                answerText: 'Facebook',
                isCorrect: true,
                option: 'A',
            },
        ],
    },
    {
        id: 5,
        questionText:
            'Which of the following API is a MUST for every ReactJS component?',
        answerOptions: [
            {
                answerText: 'renderComponent',
                isCorrect: true,
                option: 'B',
            },
        ],
    },
];

function DisplayQuizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [quizHeading, setQuizHeading] = useState(
        'Những câu hỏi phỏng vấn Front-End',
    );
    const history = useNavigate();
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00');

    const buttonOnChangeHandler = (evt) => {
        if (evt.target.attributes.iscorrect.value === 'true') {
            setScore(score + 1);
            evt.target.classList.add(cx('correct'));
        } else {
            evt.target.classList.add(cx('incorrect'));
        }

        for (let index = 1; index <= 3; index++) {
            evt.target.parentNode.children[index].disabled = true;
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            clearTimer(notime());
            setQuizHeading('Chúc mừng bạn đã hoàn thành bài Quiz');
        }
    };

    const buttonCheckAnswer = (evt) => {
        if (evt.target.attributes.iscorrect.value === 'true') {
            evt.target.classList.add(cx('correct-after'));
        } else {
            evt.target.classList.add(cx('incorrect-after'));
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
            alert('no time');
            clearTimer(notime());
            setShowScore(true);
            setQuizHeading('Chúc mừng bạn đã hoàn thành bài Quiz');
        }
    };

    const clearTimer = (e) => {
        setTimer('00:10');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    };

    const notime = () => {
        let deadline = new Date();
        deadline.setSeconds();
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    //time remaining

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [showScore]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('notification-bar')}>
                    <h5 className={cx('total-question-icon')}>
                        <ion-icon name="list-outline"></ion-icon>
                    </h5>
                    <h5 className={cx('total-question')}>
                        {Questions.length} câu
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
                                {quizHeading}
                            </h1>
                            {showScore && (
                                <div className={cx('score-section')}>
                                    <div className={cx('score-text')}>
                                        Bạn đã làm đúng {score} câu trên{' '}
                                        {Questions.length} câu hỏi
                                    </div>
                                    <div className={cx('text-bottom')}>
                                        {' '}
                                        Bạn hãy đối chiếu bài của bạn đã làm ở
                                        dưới với kết quả đã nhận được{' '}
                                    </div>
                                    <div
                                        className={cx('new-quiz')}
                                        onClick={() => history(-1)}
                                    >
                                        Làm bài mới
                                    </div>
                                    <div className={cx('see-answer')}>
                                        {QuestionsAnswer.map(
                                            (question, index) => {
                                                return (
                                                    <li
                                                        className={cx(
                                                            'quiz-item',
                                                        )}
                                                        key={index}
                                                    >
                                                        <p>
                                                            {index + 1}.{' '}
                                                            {
                                                                question.questionText
                                                            }
                                                        </p>
                                                        {question.answerOptions.map(
                                                            (
                                                                answerOption,
                                                                id,
                                                            ) => (
                                                                <div
                                                                    iscorrect={String(
                                                                        answerOption.isCorrect,
                                                                    )}
                                                                    key={id}
                                                                    id={cx(
                                                                        'quiz-button-after',
                                                                    )}
                                                                    disabled={
                                                                        false
                                                                    }
                                                                >
                                                                    {
                                                                        answerOption.option
                                                                    }
                                                                    .{' '}
                                                                    {
                                                                        answerOption.answerText
                                                                    }
                                                                </div>
                                                            ),
                                                        )}
                                                    </li>
                                                );
                                            },
                                        )}
                                    </div>
                                </div>
                            )}
                            <ul className={cx('quiz-list')}>
                                {Questions.map((question, index) => {
                                    return (
                                        <li
                                            className={cx('quiz-item')}
                                            key={index}
                                        >
                                            <p>
                                                {index + 1}.{' '}
                                                {question.questionText}
                                            </p>
                                            {question.answerOptions.map(
                                                (answerOption, id) => (
                                                    <button
                                                        iscorrect={String(
                                                            answerOption.isCorrect,
                                                        )}
                                                        key={id}
                                                        id={cx('quiz-button')}
                                                        type={cx('button')}
                                                        disabled={false}
                                                        onClick={
                                                            buttonOnChangeHandler
                                                        }
                                                    >
                                                        {answerOption.option}.{' '}
                                                        {
                                                            answerOption.answerText
                                                        }
                                                    </button>
                                                ),
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    }
                </div>
            </div>
            <div className={cx('container-sidebar')}>
                <Sidebar />
            </div>
        </div>
    );
}

export default DisplayQuizz;
