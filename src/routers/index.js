import config from '~/config';
import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Profile from '~/pages/Profile/Profile';
import Admin from '~/pages/Admin/Admin';
import Blog from '~/pages/Blogs/Blog';
import TestUser from '~/pages/TestUser';
import DisplayQuizz from '~/pages/DisplayQuizz';
import RecruiterPost from '~/pages/RecruiterPost/RecruiterPost';
import RecruitmentDetail from '~/pages/RecruitmentDetail/RecruitmentDetail';
import RecruitmentPage from '~/pages/RecruitmentPage/RecruitmentPage';
import InformationTechnology from '~/pages/InformationTechnology';
import PostQuiz from '~/pages/PostQuiz';
import Settings from '~/pages/settings/Settings';
import SavePost from '~/pages/SavePost/SavePost';

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
];

export const privateRoutes = [
    { path: config.routes.profile, component: Profile },
    { path: config.routes.settings, component: Settings },
    { path: config.routes.savepost, component: SavePost },
];

export const userPrivateRoutes = [];
export const recruiterPrivateRoutes = [];
export const adminPrivateRoutes = [
    { path: config.routes.admin, component: Admin },
];
