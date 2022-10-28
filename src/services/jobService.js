import axiosClient from '~/apis/config';
import config from '~/config';

export const getListJobApi = async () => {
    return await axiosClient.get(config.jobsApiUrl.getList);
};
