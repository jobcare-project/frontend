import React from 'react';
import { Container } from 'react-bootstrap';
import BoxHeader from '~/pages/RecruitmentDetail/BoxHeader/BoxHeader';
import FormSubmitCV from '../RecruitmentPage/FormSubmitCV/FormSubmitCV';
function RecruitmentDetail() {
    return (
        <Container>
            <BoxHeader></BoxHeader>
            <FormSubmitCV></FormSubmitCV>
        </Container>
    );
}
export default RecruitmentDetail;
