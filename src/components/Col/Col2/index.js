import React from 'react';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames/bind';
import styles from './Col2.module.scss';

const cx = classNames.bind(styles);
const ColComp2 = ({ children }) => {
    return (
        <Col md={6} className={'mb-5'}>
            {children}
        </Col>
    );
};

export default ColComp2;
