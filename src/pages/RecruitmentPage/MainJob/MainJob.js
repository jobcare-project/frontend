import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainJob.module.scss';

import { Col, Container, Row } from 'react-bootstrap';
import Card from '~/components/Card/Card';

const cx = classNames.bind(styles);
const recruitmentList = [
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description:
            'Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
    {
        thumbnail:
            'https://luatvietphong.vn/wp-content/uploads/2021/08/anh-20102715083672561-1.jpg',
        title: 'Nhà tuyển dụng ABC',
        description: 'Day la nha tuyen dung hang dau',
        salary: 'Lên đến 30tr',
        location: 'Hai Chau - Da Nang',
        createAt: '4 ngày trước',
    },
];
function MainJob() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <h2 className={cx('heading')}>Việc làm nổi bật</h2>
                <Row>
                    {recruitmentList.slice(0, 8).map((recruitment, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <Card
                                    data={recruitment}
                                    repair={
                                        <ion-icon name="heart-outline"></ion-icon>
                                    }
                                    titlRepair="Lưu tin"
                                ></Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Container>
    );
}

export default MainJob;
