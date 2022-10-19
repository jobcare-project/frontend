import { LOCAL_STORAGE_TOKEN_NAME } from '~/constants/constants';

class TokenService {
    // getLocalRefreshToken() {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     return user?.refreshToken;
    // }

    getLocalAccessToken() {
        return localStorage[LOCAL_STORAGE_TOKEN_NAME];
    }

    updateLocalAccessToken(token) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
    }

    removeAccessToken() {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    }
}

export default new TokenService();
