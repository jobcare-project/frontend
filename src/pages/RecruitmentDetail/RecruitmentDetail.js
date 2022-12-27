import React from 'react';
import classNames from 'classnames/bind';

import RelatedJob from './RelatedJob/RelatedJob';
import styles from './RecruitmentDetail.module.scss';
import Search from '../RecruitmentPage/Search/SearchJob/Search';
import DetailInfor from '~/pages/RecruitmentDetail/DetailInfor/DetailInfor';

const cx = classNames.bind(styles);
function RecruitmentDetail() {
    return (
        // <Container>
        <div className={cx('wrapper')}>
            <Search leftIcon></Search>
            <div className={cx('container')}>
                <DetailInfor></DetailInfor>
                <RelatedJob></RelatedJob>
            </div>
        </div>
        // </Container>
    );
}
export default RecruitmentDetail;
