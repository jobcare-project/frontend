import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Input from '~/components/Input/Input/Input';
import DropDown from '~/components/Input/DropDown/DropDown';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const nganhngheData = [
    {
        value: '',
        name: 'Tất cả ngành nghề',
    },
    {
        value: '10101',
        name: 'An toàn lao động',
    },
];
const diadiemData = [
    {
        value: '',
        name: 'Thành phố',
    },
    {
        value: '20101',
        name: 'Đà Nẵng',
    },
];
function Search({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col className={cx('bounded')}>
                        <div className={cx('search-input')}>
                            <Col lg={12}>
                                <Input
                                    leftIcon={
                                        <ion-icon name="search-outline"></ion-icon>
                                    }
                                    placeholder="Tìm kiếm theo công việc của bạn"
                                    primary
                                />
                            </Col>
                        </div>
                        <div className={cx('search-advanced')}>
                            <div className={cx('advanced-left')}>
                                <Col lg={12}>
                                    <DropDown data={nganhngheData} />
                                </Col>
                            </div>
                            <div className={cx('advanced-right')}>
                                <Col lg={12}>
                                    <DropDown data={diadiemData} />
                                </Col>
                            </div>
                        </div>
                        <div className={cx('search-btn')}>
                            <Button
                                // onClick={() => {
                                //     handleClickFindJobsBtn();
                                // }}
                                primary
                            >
                                Tìm kiếm
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Search;
