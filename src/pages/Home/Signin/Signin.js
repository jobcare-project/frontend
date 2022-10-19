import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './Signin.module.scss';
const cx = classNames.bind(styles);

export default function Signin() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <Row>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                    <Col xl={3}>
                        <div>hello</div>
                    </Col>
                </Row>
            </div>
            ;
        </Container>
    );
}
