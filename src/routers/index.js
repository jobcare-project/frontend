import config from '~/config';
import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Profile from '~/pages/Profile/Profile';
import Admin from '~/pages/Admin/Admin';
import Blog from '~/pages/Blogs/Blog';
import TestUser from '~/pages/TestUser';
import InformationTechnology from '~/pages/InformationTechnology';
import DisplayQuizz from '~/pages/DisplayQuizz';
import RecruiterPost from '~/pages/RecruiterPost/RecruiterPost';
import RecruitmentDetail from '~/pages/RecruitmentDetail/RecruitmentDetail';
import RecruitmentPage from '~/pages/RecruitmentPage/RecruitmentPage';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.accounts, component: Accounts, layout: null },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.accounts, component: TestUser },
    { path: config.routes.accounts, component: InformationTechnology },
    { path: config.routes.accounts, component: DisplayQuizz },
];

export const privateRoutes = [
    { path: config.routes.recruitmentpage, component: RecruitmentPage },
    { path: config.routes.recruiterpost, component: RecruiterPost },
    { path: config.routes.recruitmentdetail, component: RecruitmentDetail },

    { path: config.routes.profile, component: Profile },
];

export const userPrivateRoutes = [];
export const recruiterPrivateRoutes = [];
export const adminPrivateRoutes = [
    { path: config.routes.admin, component: Admin },
];
