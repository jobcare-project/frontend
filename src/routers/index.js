import config from '~/config';
import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Profile from '~/pages/Profile/Profile';
import Admin from '~/pages/Admin/Admin';
import Blog from '~/pages/Blogs/Blog';
import Recruitment from '~/pages/Recruitment/Recruitment';
import TestUser from '~/pages/TestUser';
import DisplayQuizz from '~/pages/DisplayQuizz';
import IT from '~/pages/IT';
import PostQuiz from '~/pages/PostQuiz';


export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.recruitment, component: Recruitment },
    { path: config.routes.accounts, component: Accounts, layout: null },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.testuser, component: TestUser },
    { path: config.routes.displayquizz, component: DisplayQuizz },
    { path: config.routes.itech, component: IT },
    { path: config.routes.postquiz, component: PostQuiz },
];

export const privateRoutes = [
    { path: config.routes.profile, component: Profile },
];

export const userPrivateRoutes = [];
export const recruiterPrivateRoutes = [];
export const adminPrivateRoutes = [
    { path: config.routes.admin, component: Admin },
];
