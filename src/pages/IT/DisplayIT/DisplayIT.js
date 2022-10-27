import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './DisplayIT.module.scss';
import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

const ListIT = [
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://giaoducnghe.edu.vn/wp-content/uploads/2020/08/h%E1%BB%8Dc-ng%C3%A0nh-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin_gi%C3%A1o-d%E1%BB%A5c-ngh%E1%BB%81.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
];

export default function DisplayIT() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <div className={cx('wrapper-infomationtechnology')}>
                    <div className={cx('inner')}>
                        <img
                            className={cx('avatar-infomationtechnology')}
                            src="https://www.aeccglobal.com.np/images/easyblog_articles/247/b2ap3_amp_top-information-technology-courses-in-australia.png"
                            alt="something-img"
                        />
                        <div className={cx('describe')}>
                            <p className={cx('heading-IT')}>
                                Công nghệ thông tin
                            </p>
                            <p className={cx('title-IT')}>
                                Dưới đây là những quizz phổ biến nhất để bạn
                                luyện tập chuẩn bị cho cuộc phỏng vấn sắp tới !
                            </p>
                        </div>
                    </div>
                </div>
                <Row>
                    {ListIT.slice(0, 12).map((IT, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={IT}
                                    to={'displayquizz'}
                                ></CardShowQuiz>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}
