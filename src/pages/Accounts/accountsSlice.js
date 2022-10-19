import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import { LOCAL_STORAGE_TOKEN_NAME } from '~/constants/constants';
import { setAuthToken } from '~/utils/auth.utils';
import {
    fetchUserApi,
    loginApi,
    logoutApi,
    registerApi,
} from '~/services/userService';
import tokenService from '~/services/tokenService';

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        status: 'idle',
        success: false,
        isAuth: undefined,
        message: '',
        data: {},
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'idle';

                if (action.payload.success) {
                    state.isAuth = true;
                    state.data = action.payload.data;
                } else {
                    state.isAuth = false;
                }
            })
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.status = 'idle';
                    state.success = true;
                    state.isAuth = true;
                    tokenService.updateLocalAccessToken(
                        action.payload.data.accessToken,
                    );
                    state.message = '';
                    state.data = action.payload.data;
                } else {
                    state.status = 'idle';
                    state.message = 'Tài khoản hoặc mật khẩu không chính xác';
                    state.success = false;
                }
            })
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.status = 'idle';
                    state.success = true;
                    state.isAuth = true;
                    state.message = '';
                    tokenService.updateLocalAccessToken(
                        action.payload.data.accessToken,
                    );
                    state.data = action.payload.data;
                } else {
                    state.status = 'idle';
                    state.success = false;
                    state.message = 'Email đã tồn tại';
                }
            })
            .addCase(fetchLogout.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchLogout.fulfilled, (state) => {
                state.status = 'idle';
                tokenService.removeAccessToken(LOCAL_STORAGE_TOKEN_NAME);
                state.isAuth = false;
                state.data = {};
            });
    },
});

export const fetchRegister = createAsyncThunk(
    'accounts/fetchRegister',
    async ({ email, password, fullname }) => {
        try {
            const res = await registerApi(email, password, fullname);
            return res.data;
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchLogin = createAsyncThunk(
    'accounts/fetchLogin',
    async (data) => {
        try {
            const res = await loginApi(data);
            return res.data;
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchUser = createAsyncThunk('accounts/fetchUser', async () => {
    const localAccessToken = tokenService.getLocalAccessToken(
        LOCAL_STORAGE_TOKEN_NAME,
    );

    if (localAccessToken) {
        setAuthToken(localAccessToken);
    }
    try {
        const res = await fetchUserApi();
        return res.data;
    } catch (error) {
        tokenService.removeAccessToken(LOCAL_STORAGE_TOKEN_NAME);
        setAuthToken(null);
        return isRejectedWithValue(error.response);
    }
});

export const fetchLogout = createAsyncThunk(
    'accounts/fetchLogout',
    async () => {
        try {
            const res = await logoutApi();
            return res.data;
        } catch (error) {
            tokenService.removeAccessToken(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            return isRejectedWithValue(error.response);
        }
    },
);
