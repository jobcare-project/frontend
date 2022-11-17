import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ title, to }) {
    return (
        <div className={cx('wrapper')}>
            <NavLink
                className={(nav) => cx('menu-item', { active: nav.isActive })}
                to={to}
            >
                <Button primary className={cx('title')}>
                    {title}
                </Button>
            </NavLink>
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;
