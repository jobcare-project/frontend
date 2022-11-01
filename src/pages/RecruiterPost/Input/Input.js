import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
const cx = classNames.bind(styles);

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
    ...passProps
}) => {
    const classes = cx(styles.input, {
        [className]: className,
        [styles.primary]: primary,
        [styles.header]: header,
        [styles.selected]: selected,
        [styles.discript]: discript,
    });
    return (
        <>
            {/* <label htmlFor={id}>{label}</label>
            {type === 'select' ? (
                <select
                    type={type}
                    id={id}
                    name={name}
                    {...passProps}
                    className={classes}
                > */}
            {/* {
                        options.map(_elt => {
                            return (
                                <option>1</option>
                            )
                        })
                    } */}
            {/* <option></option>
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    {...passProps}
                    className={classes}
                />
            )} */}
        </>
    );
};

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
