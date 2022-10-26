import axiosClient from '~/apis/config';
import config from '~/config';

export const registerApi = async (email, password, fullname) => {
    return await axiosClient.post(config.authApiUrl.register, {
        email,
        password,
        fullname,
    });
};

export const loginApi = async (data) => {
    return await axiosClient.post(config.authApiUrl.login, data);
};

export const refreshTokenApi = async (data) => {
    return await axiosClient.post(config.authApiUrl.refreshToken, data);
};

export const fetchUserApi = async () => {
    return await axiosClient.get(config.authApiUrl.fetchUser);
};

export const logoutApi = async () => {
    return await axiosClient.delete(config.authApiUrl.logout);
};
