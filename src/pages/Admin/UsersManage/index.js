import classNames from 'classnames/bind';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from '~/components/Button';
import AddAccountModal from './AddAccountModal';

import styles from './UsersManage.module.scss';

const cx = classNames.bind(styles);

function UsersManage() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className={cx('wrapper')}>
            <AddAccountModal show={showModal} onClose={handleClose} />
            <div className={cx('header')}>
                <h2 className={cx('heading')}>Quản lý người dùng</h2>
                <div className={cx('header-options')}>
                    <Button
                        onClick={handleShow}
                        leftIcon={<ion-icon name="add-sharp"></ion-icon>}
                        primary
                        rounded
                    >
                        Cấp tài khoản
                    </Button>
                </div>
            </div>

            <div className={cx('content')}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Phone Number</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pham Anh Tuan</td>
                            <td>phamanhtuan@gmail.com</td>
                            <td>user</td>
                            <td>0763030364</td>
                            <td className={cx('action-column')}>
                                <span className={cx('content-icon')}>
                                    <ion-icon name="trash-sharp"></ion-icon>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pham Anh Tuan</td>
                            <td>phamanhtuan@gmail.com</td>
                            <td>user</td>
                            <td>0763030364</td>
                            <td className={cx('action-column')}>
                                <span className={cx('content-icon')}>
                                    <ion-icon name="trash-sharp"></ion-icon>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pham Anh Tuan</td>
                            <td>phamanhtuan@gmail.com</td>
                            <td>user</td>
                            <td>0763030364</td>
                            <td className={cx('action-column')}>
                                <span className={cx('content-icon')}>
                                    <ion-icon name="trash-sharp"></ion-icon>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pham Anh Tuan</td>
                            <td>phamanhtuan@gmail.com</td>
                            <td>user</td>
                            <td>0763030364</td>
                            <td className={cx('action-column')}>
                                <span className={cx('content-icon')}>
                                    <ion-icon name="trash-sharp"></ion-icon>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UsersManage;
