import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
    leftIcon,
    rightIcon,
    className,
    rounded,
    disabled,
    children,
    ...passprops
}) {
    const classes = cx('wrapper', {
        [className]: className,
        disabled,
        rounded,
    });

    return (
        <div className={classes}>
            {leftIcon && (
                <span style={{ paddingLeft: '16px' }} className={cx('icon')}>
                    {leftIcon}
                </span>
            )}
            <input {...passprops} className={cx('input')}>
                {children}
            </input>
            {rightIcon && (
                <span style={{ paddingRight: '16px' }} className={cx('icon')}>
                    {rightIcon}
                </span>
            )}
        </div>
    );
}

export default Input;
