import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FormGroup from './FormGroup/FormGroup';
import { accountsDataSelector } from '~/redux/Selectors/authSelector';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    const userData = useSelector(accountsDataSelector);

    console.log(userData);

    return (
        <Container>
            <div className={cx('wrapper')}>
                <h1 className={cx('heading')}>Cài đặt</h1>
                <div className={cx('content')}>
                    <div className={cx('settings-block')}>
                        <h3 className={cx('settings-block-heading')}>
                            Thông tin cá nhân
                        </h3>
                        <FormGroup
                            label="Tên của bạn"
                            type="text"
                            value="Phạm Anh Tuấn"
                            desc="Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn."
                        />
                        <FormGroup
                            label="Email"
                            type="email"
                            value="phamanhtuan@gmail.com"
                            unUpdate
                            desc="Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn."
                        />
                        <FormGroup
                            label="Avatar"
                            type="file"
                            value="avatar.png"
                            desc="Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn."
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Settings;
