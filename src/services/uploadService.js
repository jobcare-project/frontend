import axiosClient from '~/apis/config';
import config from '~/config';

export const uploadImageApi = async (data) => {
    console.log('uploadImageApi', data);
    return await axiosClient.post(config.uploadApiUrl.uploadImage, data);
};
