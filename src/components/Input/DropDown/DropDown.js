import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);

export default function DropDown({ data }) {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const handleChangeSelect = (e) => {
        setValue(e.target.value);
        console.log('value', e.target.value);
    };

    const renderDropDownData = () => {
        return data.map((dropdown, index) => {
            return (
                <option key={index} value={dropdown.value}>
                    &nbsp;{dropdown.name}
                </option>
            );
        });
    };

    return (
        <div
            onClick={() => {
                setVisible(!visible);
            }}
            className={cx('wrapper')}
        >
            <div className={cx('content')}>
                <select
                    onChange={handleChangeSelect}
                    value={value}
                    className={cx('category')}
                    name="category"
                    id="category"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    {renderDropDownData()}
                </select>
            </div>
            {/* <span className={cx('icon')}>
                {visible ? (
                    <ion-icon name="chevron-down-outline"></ion-icon>
                ) : (
                    <ion-icon name="chevron-up-outline"></ion-icon>
                )}
            </span> */}
        </div>
    );
}
