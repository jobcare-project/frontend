import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './BestRecruitment.module.scss';
import Card from '~/components/Card/Card';

const cx = classNames.bind(styles);

const recruitmentList = [
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
];

export default function BestRecruitment() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Các câu hỏi liên quan</h2>
            <Row>
                {recruitmentList.slice(0, 8).map((recruitment, index) => {
                    return (
                        <Col key={index} lg={12} md={12} sm={6}>
                            <Card data={recruitment}></Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
