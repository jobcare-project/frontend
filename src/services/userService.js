import axios from 'axios';
import { API_URL } from '~/constants/constants';

export const registerApi = async (email, password, fullname) => {
    return await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password,
        fullname,
    });
};

export const loginApi = async (data) => {
    return await axios.post(`${API_URL}/api/auth/login`, data);
};

export const fetchUserApi = async () => {
    return await axios.get(`${API_URL}/api/auth/fetchUser`);
    // return await api.get(`/api/auth/fetchUser`);
};

export const logoutApi = async () => {
    return await axios.delete(`${API_URL}/api/auth/logout`);
};
