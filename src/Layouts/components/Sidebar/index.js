import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('sidebar-list')}>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? cx('sidebar-item-link', 'active')
                                : cx('sidebar-item-link')
                        }
                        to="/dashboard/chart"
                    >
                        <span className={cx('sidebar-item-link-icon')}>
                            <ion-icon name="stats-chart-sharp"></ion-icon>
                        </span>
                        <span>Chart</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? cx('sidebar-item-link', 'active')
                                : cx('sidebar-item-link')
                        }
                        to="/dashboard/usermanagement"
                    >
                        <span className={cx('sidebar-item-link-icon')}>
                            <ion-icon name="people-sharp"></ion-icon>
                        </span>
                        <span>Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? cx('sidebar-item-link', 'active')
                                : cx('sidebar-item-link')
                        }
                        to="/dashboard/recruitment"
                    >
                        <span className={cx('sidebar-item-link-icon')}>
                            <ion-icon name="id-card-sharp"></ion-icon>
                        </span>
                        <span>Recruitment</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? cx('sidebar-item-link', 'active')
                                : cx('sidebar-item-link')
                        }
                        to="/dashboard/blog"
                    >
                        <span className={cx('sidebar-item-link-icon')}>
                            <ion-icon name="book-sharp"></ion-icon>
                        </span>
                        <span>Blog</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? cx('sidebar-item-link', 'active')
                                : cx('sidebar-item-link')
                        }
                        to="/dashboard/quiz"
                    >
                        <span className={cx('sidebar-item-link-icon')}>
                            <ion-icon name="create-sharp"></ion-icon>
                        </span>
                        <span>Quizz</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
