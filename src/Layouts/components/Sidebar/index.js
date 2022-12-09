import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import config from '~/config';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const sidebarMenu = [
    {
        title: 'Thống kê',
        to: config.routes.admin,
        role: ['admin'],
        icon: <ion-icon name="stats-chart-sharp"></ion-icon>,
    },
    {
        title: 'Người dùng',
        to: config.routes.usersManagement,
        role: ['admin'],
        icon: <ion-icon name="people-sharp"></ion-icon>,
    },
    {
        title: 'Blog',
        to: '/dashboard/blog',
        role: ['admin'],
        icon: <ion-icon name="book-sharp"></ion-icon>,
    },
    {
        title: 'Bài kiểm tra',
        to: '/dashboard/quiz',
        role: ['admin'],
        icon: <ion-icon name="create-sharp"></ion-icon>,
    },
    {
        title: 'Hợp tác',
        to: '/dashboard/quiz',
        role: ['admin'],
        icon: <ion-icon name="add-circle"></ion-icon>,
    },
    {
        title: 'CV',
        to: '/dashboard/quiz',
        role: ['recruiter'],
        icon: <ion-icon name="newspaper-outline"></ion-icon>,
    },
];

function Sidebar({ role }) {
    const renderMenu = () => {
        return sidebarMenu.map((option, index) => {
            const roleMenu = option.role.some((item) => item === role);
            if (roleMenu) {
                return (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? cx('sidebar-item-link', 'active')
                                    : cx('sidebar-item-link')
                            }
                            to={option.to}
                        >
                            <span className={cx('sidebar-item-link-icon')}>
                                {option.icon}
                            </span>
                            <span>{option.title}</span>
                        </NavLink>
                    </li>
                );
            }
            return '';
        });
    };

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('sidebar-list')}>{renderMenu()}</ul>
        </div>
    );
}

export default Sidebar;
