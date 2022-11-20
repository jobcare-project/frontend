import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import {
    deletedJobDesc,
    getListJobApi,
    postJobDesc,
} from '~/services/jobService';

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
            })
            // post job
            .addCase(fetchPostJobDesc.pending, (state) => {
                state.idLoading = true;
            })
            .addCase(fetchPostJobDesc.fulfilled, (state, action) => {
                console.log('run5');

                state.idLoading = false;
                state.jobList = action.payload;
            })
            // deleted job
            .addCase(fetchDeletedJobDesc.pending, (state) => {
                state.idLoading = true;
            })
            .addCase(fetchDeletedJobDesc.fulfilled, (state, action) => {
                console.log('run5');

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

// dispatch(fetchPostJobDesc(data));
// post a job
export const fetchPostJobDesc = createAsyncThunk(
    'home/fetchPostJobDesc',
    async (data) => {
        console.log('run1');
        try {
            const res = await postJobDesc(data);
            console.log('run3');

            return res.data;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);
// deleted job
export const fetchDeletedJobDesc = createAsyncThunk(
    'home/fetchDeletedJobDesc',
    async (id) => {
        try {
            const res = await deletedJobDesc(id);

            return res.data;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);
