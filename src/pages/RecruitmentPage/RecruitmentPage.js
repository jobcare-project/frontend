import classNames from 'classnames/bind';
import styles from './RecruitmentPage.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '~/components/Card/Card';
import FindJobs from '../Home/FindJobs/FindJobs';

import { Container } from 'react-bootstrap';
import MainJob from './MainJob/MainJob';
import RuleBottom from '../Home/RuleBottom/RuleBottom';

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
        <div>
            <FindJobs></FindJobs>
            <Container>
                <MainJob></MainJob>
                <RuleBottom></RuleBottom>
            </Container>
        </div>
    );
}
