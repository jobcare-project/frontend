import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import Loading from '~/components/Loading/Loading';
import {
    isLoadingSelector,
    userListSelector,
} from '~/redux/Selectors/adminSelector';
import { fetchGetAllUsers } from '../adminSlice';
import AddAccountModal from './AddAccountModal';

import styles from './UsersManage.module.scss';

const cx = classNames.bind(styles);

function UsersManage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingSelector);
    const userList = useSelector(userListSelector);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        dispatch(fetchGetAllUsers());
    }, []);

    console.log('userList:::', userList);

    return (
        <>
            {isLoading && <Loading />}
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
                            {userList.length &&
                                userList.map((user, index) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.fullname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td className={cx('action-column')}>
                                                <span
                                                    className={cx(
                                                        'content-icon',
                                                    )}
                                                >
                                                    <ion-icon name="trash-sharp"></ion-icon>
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default UsersManage;
