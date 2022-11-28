import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import classNames from 'classnames/bind';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Accordion from 'react-bootstrap/Accordion';
// import styles from './TodoQuiz.module.scss';
import { db } from '~/config/Firebase/firebase';

function QuizDetail() {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [relatedQuizs, setRelatedQuizs] = useState([]);

    useEffect(() => {
        id && getQuizDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getQuizDetail = async () => {
        const quizRef = collection(db, 'quiz');
        const docRef = doc(db, 'quiz', id);
        const quizDetail = await getDoc(docRef);

        setQuiz(quizDetail.data());
        const relatedQuizsQuery = query(quizRef);
        const relatedQuizSnapshot = await getDocs(relatedQuizsQuery);
        const relatedQuizs = [];
        relatedQuizSnapshot.forEach((doc) => {
            relatedQuizs.push({ id: doc.id, ...doc.data() });
        });
        setRelatedQuizs(relatedQuizs);
    };

    console.log('relatedQuizs', relatedQuizs);
    return (
        <div className="single">
            <div>
                <div className="overlay"></div>
                <div className="blog-title">
                    <h2>{quiz?.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default QuizDetail;
