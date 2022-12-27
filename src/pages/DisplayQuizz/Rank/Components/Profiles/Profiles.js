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
            {data.map((value, index) => (
                <div className={cx('wrapper')} key={index}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Email</th>
                                <th>Create at</th>
                                <th>Title of quiz</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{value.userData.email}</td>
                                <td>
                                    {value.timestamp.toDate().toDateString()}
                                </td>
                                <td>{value.titleQuiz}</td>
                                <td>{value.score}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            ))}
        </Container>
    );
}
