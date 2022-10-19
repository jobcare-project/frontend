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
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Fornt-End',
        description: 'Những câu hỏi ôn tập phỏn vấn Front-End',
        salary: 'Điểm tối đa 100',
        location: '60 phút',
        createAt: '50 câu hỏi',
    },
];

export default function BestRecruitment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-infomationtechnology')}>
                <div className={cx('inner')}>
                    <img
                        className={cx('avatar-infomationtechnology')}
                        src="https://www.aeccglobal.com.np/images/easyblog_articles/247/b2ap3_amp_top-information-technology-courses-in-australia.png"
                        alt="something-img"
                    />
                    <div className={cx('describe')}>
                        <p className={cx('heading-informationtechnology')}>
                            Công nghệ thông tin
                        </p>
                        <p className={cx('title-informationtechnology')}>
                            Dưới đây là những quizz phổ biến nhất để bạn luyện
                            tập chuẩn bị cho cuộc phỏng vấn sắp tới !
                        </p>
                    </div>
                </div>
            </div>
            <Row>
                {recruitmentList.slice(0, 12).map((recruitment, index, to) => {
                    return (
                        <Col key={index} lg={3} md={4} sm={6}>
                            <Card data={recruitment} to={'displayquizz'}></Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
