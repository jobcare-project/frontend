import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);
const FunC = () => {};

export default function DropDown({
    data = [],
    onChangeDictrictID = FunC,
    title = '',
    onSelectedValue = FunC,
}) {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const [name, setName] = useState('');

    const handleChangeSelect = (e) => {
        setValue(e.target.value);
        onChangeDictrictID(e.target.value);
        setName(e.target.name);
    };

    const renderDropDownData = () => {
        return (
            data.length > 0 &&
            data?.map((dropdown, index) => {
                return (
                    <option key={index} value={dropdown.value}>
                        &nbsp;{dropdown.name}
                    </option>
                );
            })
        );
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
                    className={cx('category')}
                    id="category"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <option value="" selected disabled hidden>
                        {title}
                    </option>
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
