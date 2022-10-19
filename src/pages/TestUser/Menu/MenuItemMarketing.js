import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { NavLink} from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItemMarketing({ title,to }) {
    return (
        <NavLink className={ (nav) => cx('menu-item-marketing', {active: nav.isActive})}  to={to} >
            <span className={cx('title-marketing')} >
                {title}
            </span>
        </NavLink>

    )
}

MenuItemMarketing.propTypes = {
    title: propTypes.string.isRequired,
    to: propTypes.string.isRequired,
    icon: propTypes.node.isRequired,
};

export default MenuItemMarketing;
