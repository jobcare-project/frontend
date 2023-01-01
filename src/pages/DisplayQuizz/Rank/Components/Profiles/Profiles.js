import React from 'react';
import classNames from 'classnames/bind';
import Table from 'react-bootstrap/Table';
import styles from './Profiles.module.scss';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

export default function profiles({ Leaderboard }) {
    return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Top</th>
                        <th>Email</th>
                        <th>Ngày nộp bài</th>
                        <th>Tên bài Quiz</th>
                        <th>Điểm</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.userData.email}</td>
                            <td>{value.timestamp.toDate().toDateString()}</td>
                            <td>{value.titleQuiz}</td>
                            <td>{value.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
