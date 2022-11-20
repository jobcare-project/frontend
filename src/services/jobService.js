import axiosClient from '~/apis/config';
import config from '~/config';

export const getListJobApi = async () => {
    return await axiosClient.get(config.jobsApiUrl.getList);
};

// post a job
export const postJobDesc = async (data) => {
    return await axiosClient.post(config.jobsApiUrl.postJobDesc, data);
};
// deleted a job
export const deletedJobDesc = async (id) => {
    return await axiosClient.delete(
        `${config.jobsApiUrl.deletedJobDesc}/${id}`,
    );
};
