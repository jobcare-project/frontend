import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '~/components/Button';
// import classNames from 'classnames/bind';
// import styles from './ModalDeleted.module.scss';

// const cx = classNames.bind(styles);
function ModalPost() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button saveInput onClick={handleShow}>
                Xoá
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>THÔNG BÁO !!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc muốn xoá bài viết này không !!!!
                </Modal.Body>
                <Modal.Footer>
                    <Button saveInput onClick={handleClose}>
                        Close
                    </Button>
                    <Button primary onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalPost;
