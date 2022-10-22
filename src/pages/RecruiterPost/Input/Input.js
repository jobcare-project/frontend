import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import styled from 'styled-components';
import clsx from 'clsx';
const cx = classNames.bind(styles);
// const SelectStyled = styled.div`
//     select {
//         width: 100%;
//         height: 30px;
//         border: 1px solid #000;
//         border-radius: 5px;
//     }
// `;
// const Salary = [
//     {
//         id: 1,
//         title: 'Thoả thuận',
//     },
//     {
//         id: 2,
//         title: 'Từ',
//     },
//     {
//         id: 3,
//         title: 'Toàn thời gian',
//     },
//     {
//         id: 4,
//         title: 'Bán thời gian',
//     },
//     {
//         id: 5,
//         title: 'Thực tập',
//     },
//     {
//         id: 3,
//         title: 'Toàn thời gian',
//     },
// ];
export const FormInput = ({
    type,
    typeInput,
    label,
    name,
    id,
    primary,
    header,
    discript,
    selected,
    className,
    error,
    options,
    ...passProps
}) => {
    const classes = clsx(styles.input, {
        [className]: className,
        [styles.primary]: primary,
        [styles.header]: header,
        [styles.selected]: selected,
        [styles.discript]: discript,
    });
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {type === 'select' ? (
                <select
                    type={type}
                    id={id}
                    name={name}
                    {...passProps}
                    className={classes}
                >
                    {/* {
                        options.map(_elt => {
                            return (
                                <option>1</option>
                            )
                        })
                    } */}
                    <option>Quận/huyện</option>
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    {...passProps}
                    className={classes}
                />
            )}
        </>
    );
};
{
    /* <SelectStyled style={{ width: '100%' }}>
</SelectStyled> */
}

FormInput.propTypes = {
    type: PropTypes.string,
    typeInput: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    primary: PropTypes.bool,
    header: PropTypes.bool,
    discript: PropTypes.bool,
    selected: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
