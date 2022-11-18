import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Information.module.scss';
import { db } from '~/pages/PostQuiz/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const cx = classNames.bind(styles);

function Information() {
    const [quiz, setQuiz] = useState([]);

    const quizCollectionRef = collection(db, 'information');

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
