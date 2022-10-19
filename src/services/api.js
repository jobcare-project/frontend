import axios from 'axios';
import { API_URL } from '~/constants/constants';
import tokenService from './tokenService';

// Tạo một axios mới
const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors request: kiểm tra trước khi gưi request
instance.interceptors.request.use(
    (config) => {
        const token = tokenService.getLocalAccessToken();
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Interceptors response: kiểm tra sau khi nhân response
instance.interceptors.response.use(
    (res) => {
        const config = res.config;

        if (
            config.url.indexOf('/login') >= 0 ||
            config.url.indexOf('/refreshtoken') >= 0
        ) {
            return res;
        }

        console.log(res);
    },
    async (err) => {
        return Promise.reject(err);
    },
);

export default instance;
