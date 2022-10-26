import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

const navigationMenu = [
    {
        title: 'Tuyển dụng',
        to: '/recruitmentpage/user',
        role: ['user'],
    },
    {
        title: 'Tuyển dụng',
        to: '/recruitment/recruiter',
        role: ['recruiter'],
    },
    {
        title: 'Làm bài test',
        to: '/testuser',
        role: ['user'],
    },

    {
        title: 'Tạo CV',
        to: '/cv',
        role: ['user'],
    },
    {
        title: 'Test Manage',
        to: '/test-manage',
        role: ['recruiter', 'admin'],
    },
    {
        title: 'Blog',
        to: '/blog',
        role: ['user', 'recruiter', 'admin'],
    },
];

function Navigation({ role }) {
    const renderMenu = () => {
        return navigationMenu.map((option, index) => {
            const roleMenu = option.role.some((item) => item === role);
            if (roleMenu) {
                return (
                    <li key={index} className={cx('navigation-item')}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? cx('navigation-item-link', 'active')
                                    : cx('navigation-item-link')
                            }
                            to={option.to}
                        >
                            <span>{option.title}</span>
                        </NavLink>
                    </li>
                );
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('navigation-list')}>{renderMenu()}</ul>
        </div>
    );
}

Navigation.propTypes = {
    role: PropTypes.string.isRequired,
};

export default memo(Navigation);
