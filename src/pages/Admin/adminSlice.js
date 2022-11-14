import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';

import { getAllUsersApi, registerRecruiterApi } from '~/services/userService';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isLoading: false,
        success: false,
        message: '',
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegisterRecruiter.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegisterRecruiter.fulfilled, (state, action) => {
                const resData = action.payload;
                console.log('resData:::', resData);
                state.isLoading = false;
                if (resData.success) {
                    state.message = '';
                    state.success = true;
                } else {
                    state.success = false;
                    state.message = resData.message;
                }
            })
            .addCase(fetchGetAllUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.data;
            });
    },
});

export const fetchRegisterRecruiter = createAsyncThunk(
    'admin/fetchRegisterRecruiter',
    async ({ email, password, fullname }) => {
        try {
            return await registerRecruiterApi(email, password, fullname);
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchGetAllUsers = createAsyncThunk(
    'admin/fetchGetAllUsers',
    async () => {
        try {
            return await getAllUsersApi();
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);
