import classNames from 'classnames/bind';
import styles from './RecruitmentPage.module.scss';

import { Container } from 'react-bootstrap';
import MainJob from './MainJob/MainJob';
import RuleBottom from '../Home/RuleBottom/RuleBottom';
import Search from './Search/SearchJob/Search';
import Carousel from '../Home/Slider/Slider';
const cx = classNames.bind(styles);

export default function RecruitmentPage() {
    return (
        <div className={cx('wrapper')}>
            <Search></Search>
            <Carousel></Carousel>
            <MainJob></MainJob>
            <RuleBottom></RuleBottom>
        </div>
    );
}
