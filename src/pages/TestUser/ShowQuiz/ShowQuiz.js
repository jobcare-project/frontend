import classNames from 'classnames/bind';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ShowQuiz.module.scss';
import config from '~/config';
import Menu, { MenuItem } from '../Menu';
import CardShowQuiz from '~/components/CardShowQuiz/CardShowQuiz';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

//Quizz Công nghệ thông tin

const itList = [
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
];

// Quizz Marketing

const marketingList = [
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
];

// Quizz quản trị kinh doanh

const businessAdministrationList = [
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
];

// Quizz ngôn ngữ học

const linguisticsList = [
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
        maxScore: ' Điểm tối đá 10 điểm',
        timeQuiz: ' Thời gian làm bài 60 phút  ',
        listQuiz: ' 30 câu hỏi ',
    },
];

export default function ShowQuiz() {
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <h2 className={cx('heading')}>
                    Công nghệ thông tin
                    <Menu>
                        <MenuItem title="Xem thêm" to={config.routes.itech} />
                    </Menu>
                </h2>

                <Row>
                    {itList.slice(0, 8).map((itList, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={itList}
                                    to={'displayquizz'}
                                ></CardShowQuiz>
                            </Col>
                        );
                    })}
                </Row>

                <h2 className={cx('heading')}>
                    Marketing
                    <Menu>
                        <MenuItem
                            title="Xem thêm"
                            to={config.routes.marketing}
                        />
                    </Menu>
                </h2>

                <Row>
                    {marketingList.slice(0, 8).map((marketingList, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardShowQuiz
                                    quiz={marketingList}
                                ></CardShowQuiz>
                            </Col>
                        );
                    })}
                </Row>

                <h2 className={cx('heading')}>
                    Quản trị kinh doanh
                    <Menu>
                        <MenuItem
                            title="Xem thêm"
                            to={config.routes.businessadministration}
                        />
                    </Menu>
                </h2>

                <Row>
                    {businessAdministrationList
                        .slice(0, 8)
                        .map((businessAdministrationList, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <CardShowQuiz
                                        quiz={businessAdministrationList}
                                    ></CardShowQuiz>
                                </Col>
                            );
                        })}
                </Row>

                <h2 className={cx('heading')}>
                    Ngôn ngữ học
                    <Menu>
                        <MenuItem
                            title="Xem thêm"
                            to={config.routes.linguistics}
                        />
                    </Menu>
                </h2>

                <Row>
                    {linguisticsList
                        .slice(0, 8)
                        .map((linguisticsList, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <CardShowQuiz
                                        quiz={linguisticsList}
                                    ></CardShowQuiz>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </div>
    );
}
