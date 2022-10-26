import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './Signin.module.scss';
import Input from '~/components/Input/Input/Input';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

export default function Signin() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col className={cx('left')} lg={4} md={4}>
                        <h3 className={cx('left-title')}>Dùng thử ngay</h3>
                        <p className={cx('sub-title')}>
                            Bạn đang đau đầu với vấn đề tuyển dụng và quản lý
                            nhân sự? Điền thông tin ngay để đăng ký dùng thử 14
                            ngày miễn phí cùng JobCare.
                        </p>
                        <Row>
                            <Col>
                                <div className={cx('number')}>40.000+</div>
                                <div>người lao động</div>
                            </Col>
                            <Col>
                                <div className={cx('number')}>360.000+</div>
                                <div>giờ làm việc</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        className={cx('right')}
                        lg={{ span: 5, offset: 3 }}
                        md={{ span: 5, offset: 3 }}
                    >
                        <Row>
                            <Col className={cx('input-block')} md={12}>
                                <Input
                                    rounded
                                    type="text"
                                    placeholder="Tên của bạn"
                                    leftIcon={
                                        <ion-icon name="person-add-outline"></ion-icon>
                                    }
                                />
                            </Col>
                            <Col className={cx('input-block')} md={12}>
                                <Input
                                    rounded
                                    type="text"
                                    placeholder="Số điện thoại"
                                    leftIcon={
                                        <ion-icon name="call-outline"></ion-icon>
                                    }
                                />
                            </Col>
                            <Col className={cx('input-block')} md={12}>
                                <Input
                                    rounded
                                    type="email"
                                    placeholder="Email"
                                    leftIcon={
                                        <ion-icon name="mail-outline"></ion-icon>
                                    }
                                />
                            </Col>
                            <Col md={12}>
                                <Row className={cx('right-bottom')}>
                                    <Col className={cx('right-contact')} md={6}>
                                        Hỗ trợ: 076 3030 364
                                    </Col>
                                    <Col md={6}>
                                        <Button right primary rounded>
                                            Dùng thử ngay
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
