const routes = {
    home: '/',
    admin: '/admin/chart',
    recruiter: '/recruiter/recruiterpost',
    recruitersaved: '/recruiter/savedpost',
    profile: '/profile',
    settings: '/settings',
    accounts: '/accounts',
    blog: '/blog/blogpost',
    cv: '/cv',
    recruitment: '/recruitmentpage',
    testuser: '/testuser',
    informationtechnology: '/testuser/informationtechnology',
    marketing: '/testuser/marketing',
    businessadministration: '/testuser/businessadministration',
    linguistics: '/testuser/linguistics',
    postquiz: '/recruiter/recruiterpost/postquiz',
    recruiterpost: '/recruiter/recruiterpostjob',
    recruitmentdetail: 'recruitmentpage/recruitmentdetail/:recruitmentId',
    recruitmentpage: '/recruitmentpage',
    displayquizz: 'testuser/displayquizz/:id',
    savepost: '/savedPost/recruitmentSaved',
    usersManagement: '/admin/usermanagement',
    editPost: '/recruiter/recruiterpostjob/:id',
    postblog: '/blog/postblog',
    blogcontent: '/blog/postblog/blogcontent',
    blogdetail: '/blog/blogpost/blogdetail/:id', // /:id

    // saved post
    savedrecruitment: '/savedPost/SavedRecruitment',
    savedblog: '/savedPost/SavedBlog',
    savedquizz: '/savedPost/SavedQuizz',
};

export default routes;
