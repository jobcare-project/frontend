import classNames from 'classnames/bind';
import { Col, Modal, Row } from 'react-bootstrap';

import styles from './ModalAddOptions.module.scss';

const cx = classNames.bind(styles);

const modalOptions = [
    {
        icon: <ion-icon name="person-outline"></ion-icon>,
        desc: 'Thông tin liên hệ',
        isDisable: true,
    },
    {
        icon: <ion-icon name="accessibility-outline"></ion-icon>,
        desc: 'Tóm tắt bản thân',
        isDisable: false,
    },
    {
        icon: <ion-icon name="locate-outline"></ion-icon>,
        desc: 'Mục tiêu nghề nghiệp',
        isDisable: false,
    },
    {
        icon: <ion-icon name="dice-outline"></ion-icon>,
        desc: 'Kiến thức và Kỹ năng',
        isDisable: true,
    },
    {
        icon: <ion-icon name="extension-puzzle-outline"></ion-icon>,
        desc: 'Kinh nghiệm làm việc',
        isDisable: true,
    },
    {
        icon: <ion-icon name="school-outline"></ion-icon>,
        desc: 'Trình độ học vấn',
        isDisable: true,
    },
    {
        icon: <ion-icon name="language-outline"></ion-icon>,
        desc: 'Ngôn ngữ',
        isDisable: false,
    },
    {
        icon: <ion-icon name="business-outline"></ion-icon>,
        desc: 'Dự án đã làm',
        isDisable: false,
    },
    {
        icon: <ion-icon name="ribbon-outline"></ion-icon>,
        desc: 'Chứng chỉ',
        isDisable: false,
    },
    {
        icon: <ion-icon name="trophy-outline"></ion-icon>,
        desc: 'Giải thưởng',
        isDisable: false,
    },
    {
        icon: <ion-icon name="cellular-outline"></ion-icon>,
        desc: 'Hoạt động',
        isDisable: false,
    },
    {
        icon: <ion-icon name="options-outline"></ion-icon>,
        desc: 'Tùy chỉnh',
        isDisable: false,
    },
];

function ModalAddOptions({ show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} className={cx('wrapper')}>
            <Modal.Header className={cx('header')} closeButton>
                <Modal.Title className={cx('title')}>
                    Thêm thành phần mới
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={cx('body')}>
                <Row className={cx('options')}>
                    {modalOptions.map((option, index) => {
                        return (
                            <Col key={index} md={3}>
                                <div
                                    className={
                                        option.isDisable
                                            ? cx('options-item', 'disable')
                                            : cx('options-item')
                                    }
                                >
                                    <div className={cx('options-item-content')}>
                                        <span
                                            className={cx(
                                                'options-content-icon',
                                            )}
                                        >
                                            {option.icon}
                                        </span>
                                    </div>
                                    <div className={cx('options-item-desc')}>
                                        {option.desc}
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAddOptions;
