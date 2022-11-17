export const isLoadingSelector = (state) => {
    return state.home?.isLoading;
};

export const jobListSelector = (state) => {
    return state.home?.jobList;
};
