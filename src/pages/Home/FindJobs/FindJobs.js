import classNames from 'classnames/bind';
import styles from './FindJobs.module.scss';
import DropDown from '~/components/Input/DropDown/DropDown';
import Input from '~/components/Input/Input/Input';

import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const nganhngheData = [
    {
        value: '',
        name: 'Ngành nghề',
    },
    {
        value: '10101',
        name: 'An toàn lao động',
    },
    {
        value: '10102',
        name: 'Bán hàng kỹ thuật',
    },
    {
        value: '10004',
        name: 'Bán lẻ / bán sỉ',
    },
    {
        value: '10104',
        name: 'Bất động sản',
    },
    {
        value: '10005',
        name: 'Bưu chính - Viễn thông',
    },
];

export default function FindJobs() {
    const handleClickFindJobsBtn = (e) => {
        console.log('handleClickFindJobsBtn');
    };

    return (
        <div className={cx('wrapper')}>
            <Container>
                <h1 className={cx('heading')}>Tìm việc phù hợp với bạn</h1>
                <Row>
                    <Col lg={8}>
                        <div className={cx('left')}>
                            <Row>
                                <Col lg={9}>
                                    <Input
                                        leftIcon={
                                            <ion-icon name="search-outline"></ion-icon>
                                        }
                                        placeholder="Tên công việc, vị trí bạn muốn ứng tuyển..."
                                    />
                                    <div className={cx('advanced')}>
                                        <h5 className={cx('advanced-title')}>
                                            Tìm kiếm nâng cao
                                        </h5>
                                        <Row>
                                            <Col lg={6}>
                                                <DropDown
                                                    title="Nghành nghề"
                                                    data={nganhngheData}
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <DropDown
                                                    title="Vị trí"
                                                    data={nganhngheData}
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <DropDown
                                                    title="Thành phố"
                                                    data={nganhngheData}
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <DropDown
                                                    title="Mức lương"
                                                    data={nganhngheData}
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <DropDown
                                                    title="Hình thức làm việc"
                                                    data={nganhngheData}
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <DropDown
                                                    title="Cấp bậc"
                                                    data={nganhngheData}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col lg={3}>
                                    <div className={cx('controls-block')}>
                                        <Button
                                            className={cx('btn')}
                                            onClick={() => {
                                                handleClickFindJobsBtn();
                                            }}
                                            primary
                                        >
                                            Tìm việc ngay
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={cx('right')}>
                            <img
                                className={cx('box-search-img')}
                                src={images.findJobs}
                                alt="findjob-img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
