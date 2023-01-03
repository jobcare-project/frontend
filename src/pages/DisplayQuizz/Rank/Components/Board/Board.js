import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { collection, query, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '~/config/Firebase/firebase';
import Profiles from '../Profiles';
import styles from './Board.module.scss';

const cx = classNames.bind(styles);

export default function Board() {
    const [workData, setWorkData] = useState([]);
    const { id } = useParams();
    //get id from firebase from useParams

    useEffect(() => {
        id && getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getData = async () => {
        const q = query(collection(db, 'quiz'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        data.map(async () => {
            const workQ = query(collection(db, `quiz/${id}/details`));
            const workDetails = await getDocs(workQ);
            const workInfo = workDetails.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setWorkData(workInfo);
        });
    };
    getData();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('leaderboard')}>Leaderboard</div>
            <Profiles Leaderboard={between(workData)}></Profiles>
        </div>
    );
}

function between(data, between) {
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter((val) => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    });

    // sort with asending order
    return filter.sort((a, b) => {
        if (a.score === b.score) {
            return b.score - a.score;
        } else {
            return b.score - a.score;
        }
    });
}
