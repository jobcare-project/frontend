import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import { useState, useEffect } from 'react';
import { db } from '~/config/Firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const cx = classNames.bind(styles);

function Information() {
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
    }, [quiz, quizCollectionRef]);
    return (
        <div className={cx('wrapper')}>
            {quiz.map((post, i) => (
                <div className={cx('quiz-heading')} key={post.id}>
                    <div className={cx('title')}>{post.title}</div>
                    <div className={cx('desc')}>{post.desc}</div>
                </div>
            ))}
        </div>
    );
}

export default Information;
