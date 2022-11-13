import config from '~/config';
import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Blog from '~/pages/Blogs/Blog';
import TestUser from '~/pages/TestUser';
import DisplayQuizz from '~/pages/DisplayQuizz';
import RecruiterPost from '~/pages/RecruiterPost/RecruiterPost';
import RecruitmentDetail from '~/pages/RecruitmentDetail/RecruitmentDetail';
import RecruitmentPage from '~/pages/RecruitmentPage/RecruitmentPage';
import InformationTechnology from '~/pages/InformationTechnology';
import PostQuiz from '~/pages/PostQuiz';
import Settings from '~/pages/settings/Settings';
import SidebarLayout from '~/Layouts/SidebarLayout';
import CV from '~/pages/CV';
import NonFooterLayout from '~/Layouts/NonFooterLayout';
import Profile from '~/pages/Profile';
import Admin from '~/pages/Admin';
import UsersManage from '~/pages/Admin/UsersManage';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.accounts, component: Accounts, layout: null },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.testuser, component: TestUser },
    { path: config.routes.displayquizz, component: DisplayQuizz },
    {
        path: config.routes.informationtechnology,
        component: InformationTechnology,
    },
    { path: config.routes.postquiz, component: PostQuiz },
    { path: config.routes.recruitmentpage, component: RecruitmentPage },
    { path: config.routes.recruiterpost, component: RecruiterPost },
    { path: config.routes.recruitmentdetail, component: RecruitmentDetail },
    { path: config.routes.cv, component: CV, layout: NonFooterLayout },
];

export const privateRoutes = [
    { path: config.routes.profile, component: Profile },
    { path: config.routes.settings, component: Settings },
];

export const userPrivateRoutes = [];
export const recruiterPrivateRoutes = [];
export const adminPrivateRoutes = [
    { path: config.routes.admin, component: Admin, layout: SidebarLayout },
    {
        path: config.routes.usersManagement,
        component: UsersManage,
        layout: SidebarLayout,
    },
];
