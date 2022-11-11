import classNames from 'classnames/bind';
import styles from './RecruitmentPage.module.scss';

import { Container } from 'react-bootstrap';
import MainJob from './MainJob/MainJob';
import RuleBottom from '../Home/RuleBottom/RuleBottom';
import Search from './Search/Search';
import Carousel from '../Home/Slider/Slider';
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
