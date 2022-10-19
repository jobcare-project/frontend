import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './BestRecruitment.module.scss';
import CardTestUser from '~/components/CardTestUser/CardTestUser';
import config from '~/config';
import Menu from '../Menu';
import { MenuItemIT , MenuItemBusiness , MenuItemLinguistics , MenuItemMarketing } from '../Menu';


const cx = classNames.bind(styles);

//Quizz Công nghệ thông tin

const recruitmentListCNTT = [
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://bizflyportal.mediacdn.vn/bizflyportal/375/470/2020/04/28/21/33/115880627863553.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
];

// Quizz Marketing

const recruitmentListMarketing = [
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://amis.misa.vn/wp-content/uploads/2021/09/marketing-la-gi.png',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
];

// Quizz quản trị kinh doanh

const recruitmentListBusinessAdministration = [
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://www.study365.co.uk/wp-content/uploads/2016/09/Business-Administration-Skills.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
];

// Quizz ngôn ngữ học

const recruitmentListLinguistics = [
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
    {
        thumbnail:
            'https://www.thoughtco.com/thmb/AJgCBOXOrDV_THLddckAHGy-EBQ=/2042x1149/smart/filters:no_upscale()/Getty_linguistics-175416686-570f1f255f9b581408973018.jpg',
        title: 'Những câu hỏi ôn tập phỏng vấn Front-End',
    },
];

export default function BestRecruitment() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Công nghệ thông tin</h2>
            <Menu>
                <MenuItemIT
                    title=" Xem thêm  "
                    to={config.routes.informationtechnology}
                    icon={null}
                />
            </Menu>
            <Row>
                {recruitmentListCNTT.slice(0, 8).map((recruitment, index) => {

                    return (
                        <Col key={index} lg={3} md={4} sm={6}>
                            <CardTestUser data={recruitment}></CardTestUser>
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
                {recruitmentListMarketing
                    .slice(0, 8)
                    .map((recruitment, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardTestUser data={recruitment}></CardTestUser>
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
                {recruitmentListBusinessAdministration
                    .slice(0, 8)
                    .map((recruitment, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardTestUser data={recruitment}></CardTestUser>
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
                {recruitmentListLinguistics
                    .slice(0, 8)
                    .map((recruitment, index) => {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CardTestUser data={recruitment}></CardTestUser>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
}
