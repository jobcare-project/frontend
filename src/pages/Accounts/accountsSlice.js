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
    updateProfileUserApi,
} from '~/services/userService';
import tokenService from '~/services/tokenService';
import { uploadImageApi } from '~/services/uploadService';
import { getAllSavedRecruitmentsApi } from '~/services/jobService';

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        status: 'idle',
        success: false,
        isAuth: undefined,
        message: '',
        data: {},
        savedRecruitmentsList: [],
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
                const resData = action.payload;
                if (resData.success) {
                    state.status = 'idle';
                    state.success = true;
                    state.isAuth = true;
                    tokenService.updateLocalAccessToken(
                        resData.data.accessToken,
                    );
                    tokenService.updateLocalRefreshToken(
                        resData.data.refreshToken,
                    );
                    state.message = '';
                    state.data = resData.data;
                } else {
                    state.status = 'idle';
                    state.message = 'T??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c';
                    state.success = false;
                }
            })
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                const resData = action.payload;
                if (resData.success) {
                    state.status = 'idle';
                    state.success = true;
                    state.isAuth = true;
                    state.message = '';
                    tokenService.updateLocalAccessToken(
                        resData.data.accessToken,
                    );
                    state.data = resData.data;
                } else {
                    state.status = 'idle';
                    state.success = false;
                    state.message = 'Email ???? t???n t???i';
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
            })
            .addCase(fetchUpdateProfile.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUpdateProfile.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload.data;
            })
            .addCase(fetchSavedRecruitments.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSavedRecruitments.fulfilled, (state, action) => {
                state.status = 'idle';
                state.savedRecruitmentsList = action.payload.data;
            });
    },
});

export const fetchRegister = createAsyncThunk(
    'accounts/fetchRegister',
    async ({ email, password, fullname }) => {
        try {
            return await registerApi(email, password, fullname);
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchLogin = createAsyncThunk(
    'accounts/fetchLogin',
    async (data) => {
        try {
            return await loginApi(data);
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchUser = createAsyncThunk('accounts/fetchUser', async () => {
    try {
        return await fetchUserApi();
    } catch (error) {
        return isRejectedWithValue(error.response);
    }
});

export const fetchLogout = createAsyncThunk(
    'accounts/fetchLogout',
    async () => {
        try {
            return await logoutApi();
        } catch (error) {
            tokenService.removeAccessToken(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchUploadImage = createAsyncThunk(
    'accounts/fetchUploadImage',
    async (payload) => {
        try {
            const res = await uploadImageApi(payload);
            return res;
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchUpdateProfile = createAsyncThunk(
    'accounts/fetchUpdateProfile',
    async (data) => {
        try {
            return await updateProfileUserApi(data);
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchSavedRecruitments = createAsyncThunk(
    'accounts/fetchSavedRecruitments',
    async () => {
        try {
            return await getAllSavedRecruitmentsApi();
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);
