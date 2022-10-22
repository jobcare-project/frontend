import React from 'react';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames/bind';
import styles from './Col1.module.scss';

const cx = classNames.bind(styles);
const ColComp1 = ({ children }) => {
    return (
        <Col sm={12} md={12} className={'mb-5'}>
            {children}
        </Col>
    );
};

export default ColComp1;
