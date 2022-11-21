import React from 'react';
import { Container } from 'react-bootstrap';
import BoxHeader from '~/pages/RecruitmentDetail/BoxHeader/BoxHeader';
import Carousel from '../Home/Slider/Slider';
import RelatedJob from './RelatedJob/RelatedJob';
function RecruitmentDetail() {
    return (
        <Container>
            <Carousel></Carousel>
            <BoxHeader></BoxHeader>
            <RelatedJob></RelatedJob>
        </Container>
    );
}
export default RecruitmentDetail;
