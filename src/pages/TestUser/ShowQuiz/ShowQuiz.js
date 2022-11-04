import classNames from 'classnames/bind';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ShowQuiz.module.scss';
import CardTestUser from '~/components/CardTestUser/CardTestUser';
import config from '~/config';
import Menu from '../Menu';
import {
    MenuItemIT,
    MenuItemBusiness,
    MenuItemLinguistics,
    MenuItemMarketing,
} from '../Menu';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

//Quizz Công nghệ thông tin

const CNTTList = [
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
            <Container>
                <h2 className={cx('heading')}>Công nghệ thông tin</h2>
                <Menu>
                    <MenuItemIT
                        title=" Xem thêm  "
                        to={config.routes.informationtechnology}
                    />
                </Menu>
                <Row>
                    {CNTTList.slice(0, 8).map((CNTTList, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardTestUser
                                    quiz={CNTTList}
                                    to={'displayquizz'}
                                ></CardTestUser>
                            </Col>
                        );
                    })}
                </Row>

                <h2 className={cx('heading')}>Marketing</h2>
                <Menu>
                    <MenuItemMarketing
                        title=" Xem thêm  "
                        to={config.routes.marketing}
                        icon={null}
                    />
                </Menu>
                <Row>
                    {marketingList.slice(0, 8).map((marketingList, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardTestUser
                                    quiz={marketingList}
                                ></CardTestUser>
                            </Col>
                        );
                    })}
                </Row>

                <h2 className={cx('heading')}>Quản trị kinh doanh</h2>
                <Menu>
                    <MenuItemBusiness
                        title=" Xem thêm  "
                        to={config.routes.businessadministration}
                        icon={null}
                    />
                </Menu>
                <Row>
                    {businessAdministrationList
                        .slice(0, 8)
                        .map((businessAdministrationList, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <CardTestUser
                                        quiz={businessAdministrationList}
                                    ></CardTestUser>
                                </Col>
                            );
                        })}
                </Row>

                <h2 className={cx('heading')}>Ngôn ngữ học</h2>
                <Menu>
                    <MenuItemLinguistics
                        title=" Xem thêm  "
                        to={config.routes.linguistics}
                        icon={null}
                    />
                </Menu>
                <Row>
                    {linguisticsList
                        .slice(0, 8)
                        .map((linguisticsList, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <CardTestUser
                                        quiz={linguisticsList}
                                    ></CardTestUser>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </div>
    );
}
