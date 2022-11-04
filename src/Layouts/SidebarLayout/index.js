import classNames from 'classnames/bind';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './SidebarLayout.module.scss';

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <Header admin />
                    {children}
                </Col>
            </Row>
        </div>
    );
}

export default SidebarLayout;
