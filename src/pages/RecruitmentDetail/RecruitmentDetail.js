import React from 'react';
import styles from './RecruitmentDetail.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Container } from 'react-bootstrap';
import BoxHeader from '~/pages/RecruitmentDetail/BoxHeader/BoxHeader';
import DescriptDetail from './RecruitDetail/DescriptDetail';
const cx = classNames.bind(styles);
function RecruitmentDetail() {
    return (
        <Container>
            <BoxHeader></BoxHeader>
        </Container>
    );
}

export default RecruitmentDetail;
