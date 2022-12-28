import config from '~/config';
import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Blog from '~/pages/Blogs/Blog';

import TestUser from '~/pages/TestUser';
import DisplayQuizz from '~/pages/DisplayQuizz';
import RecruiterPost from '~/pages/Recruiter/RecruiterPost/RecruiterPost';
import RecruitmentDetail from '~/pages/RecruitmentDetail/RecruitmentDetail';
import RecruitmentPage from '~/pages/RecruitmentPage/RecruitmentPage';
import PostQuiz from '~/pages/PostQuiz';
import Settings from '~/pages/settings/Settings';
import SavePost from '~/pages/SavePost/SavedPost';
import SidebarLayout from '~/Layouts/SidebarLayout';
import CV from '~/pages/CV';
import NonFooterLayout from '~/Layouts/NonFooterLayout';
import Profile from '~/pages/Profile';
import ManageQuiz from '~/pages/ManageQuiz';
import IT from '~/pages/IT';
import InformationTechnology from '~/pages/InformationTechnology/InformationTechnology';
import UsersManage from '~/pages/Admin/UsersManage';
import Recruiter from '~/pages/Recruiter/RecruiterNews/RecruiterNews';
import ListPostOfRecruiter from '~/pages/Recruiter/RecruiterSaved/ListRecruitmentPost';
import RecruiterPostEdit from '~/pages/Recruiter/RecruiterPostEdit/RecruiterPostEdit';
import ContentBlog from '~/pages/Blogs/BlogContent/BlogContent';
import BlogDetail from '~/pages/Blogs/BlogDetail/BlogDetail';
import PostBlog from '~/pages/Blogs/BlogController/PostBlog/PostBlog';
import SavedRecruitment from '~/pages/SavePost/SavedRecruitment/SavedRecruitment';
import SavedBlog from '~/pages/SavePost/SavedBlog/SavedBlog';
import SavedQuizz from '~/pages/SavePost/SavedQuiz/SavedQuiz';
import Dashboard from '~/pages/Admin/Dashboard';
import RecruiterPostManage from '~/pages/Recruiter/Post';
import RecruiterManagePost from '~/pages/Recruiter/ManagePost';
import SavedQuiz from '~/pages/SavePost/SavedQuiz/SavedQuiz';
import BlogController from '~/pages/Blogs/BlogController/BlogController';
import MyBlog from '~/pages/Blogs/BlogController/MyBlog/MyBlog';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.accounts, component: Accounts, layout: null },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.testuser, component: TestUser },

    { path: config.routes.recruitmentpage, component: RecruitmentPage },
    { path: config.routes.recruiterpost, component: RecruiterPost },
    { path: config.routes.cv, component: CV, layout: NonFooterLayout },
    { path: config.routes.itech, component: IT },
    { path: config.routes.managequiz, component: ManageQuiz },
    {
        path: config.routes.informationtechnology,
        component: InformationTechnology,
    },
    { path: config.routes.recruitmentpage, component: RecruitmentPage },
    { path: config.routes.cv, component: CV, layout: NonFooterLayout },
    { path: config.routes.recruitmentdetail, component: RecruitmentDetail },
];

export const privateRoutes = [
    { path: config.routes.recruitmentpage, component: RecruitmentPage },
    { path: config.routes.profile, component: Profile },
    {
        path: config.routes.settings,
        component: Settings,
    },
    {
        path: config.routes.savepost,
        component: SavePost,
        layout: SidebarLayout,
    },
    { path: config.routes.editPost, component: RecruiterPostEdit },
    { path: config.routes.postblog, component: PostBlog },
    { path: config.routes.createblog, component: BlogController },
    { path: config.routes.manageBlog, component: PostBlog },
    { path: config.routes.blogcontent, component: ContentBlog },
    { path: config.routes.blogdetail, component: BlogDetail },
    {
        path: config.routes.saverecruitment,
        component: SavedRecruitment,
        layout: SidebarLayout,
    },
    {
        path: config.routes.savequiz,
        component: SavedQuiz,
        layout: SidebarLayout,
    },
    {
        path: config.routes.saveblog,
        component: SavedBlog,
        layout: SidebarLayout,
    },
    {
        path: config.routes.savedblog,
        component: SavedBlog,
        layout: SidebarLayout,
    },
    { path: config.routes.displayquizz, component: DisplayQuizz },
    { path: config.routes.postquiz, component: PostQuiz },
    { path: config.routes.manageQuiz, component: PostQuiz },
    { path: config.routes.myblog, component: MyBlog },
];

export const userPrivateRoutes = [];

export const recruiterPrivateRoutes = [
    {
        path: config.routes.recruiterpost,
        component: RecruiterPost,
        layout: SidebarLayout,
    },
    {
        path: config.routes.recruiter,
        component: Recruiter,
        layout: SidebarLayout,
    },
    {
        path: config.routes.recruiterPostSidebar,
        component: RecruiterPostManage,
        layout: SidebarLayout,
    },
    {
        path: config.routes.recruiterPostManageSidebar,
        component: RecruiterManagePost,
        layout: SidebarLayout,
    },
    {
        path: config.routes.ListRecruitmentPost,
        component: ListPostOfRecruiter,
        layout: SidebarLayout,
    },
];

export const adminPrivateRoutes = [
    { path: config.routes.admin, component: Dashboard, layout: SidebarLayout },
    {
        path: config.routes.usersManagement,
        component: UsersManage,
        layout: SidebarLayout,
    },
];
