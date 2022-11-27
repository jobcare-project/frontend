import React from 'react';
import styles from './SavedPost.module.scss';
import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import DropDownPage from './DropDownPage/DropDownPage';
import Card from '~/components/Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobListSelector } from '~/redux/Selectors/jobSelector';
import { fetchListJob } from '~/pages/Home/homeSlice';
import { fetchDeletedJobDesc } from '../Home/homeSlice';
export default function SavedPostItem({ data }) {
    return (
        <Col key={data.id} lg={3} md={4} sm={6}>
            <Card
                data={data}
                deleted={<ion-icon name="trash-outline"></ion-icon>}
                titleDeleted="Xoá tin"
                repair={<ion-icon name="pencil-outline"></ion-icon>}
                titlRepair="Sửa tin"
                id={data.id}
            ></Card>
        </Col>
    );
}
