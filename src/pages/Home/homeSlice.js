import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import { getListJobApi } from '~/services/jobService';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        idLoading: false,
        jobList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListJob.pending, (state) => {
                state.idLoading = true;
            })
            .addCase(fetchListJob.fulfilled, (state, action) => {
                state.idLoading = false;
                state.jobList = action.payload;
            });
    },
});

export const fetchListJob = createAsyncThunk('home/fetchListJob', async () => {
    try {
        const res = await getListJobApi();
        return res.data;
    } catch (error) {
        console.log(error);
        return isRejectedWithValue(error.response);
    }
});
