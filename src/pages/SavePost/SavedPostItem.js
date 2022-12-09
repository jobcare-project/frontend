import React from 'react';
import { Col } from 'react-bootstrap';
import Card from '~/components/Card/Card';
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
