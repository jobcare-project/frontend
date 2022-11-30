import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import {
    deletedJobDesc,
    editJobDesc,
    getListJobApi,
    postJobDesc,
} from '~/services/jobService';

export const recruiterSlice = createSlice({
    name: 'recruiter',
    initialState: {
        idLoading: false,
        jobList: [],
        messsage: false,
        job: {},
        jobDisplayPagination: [],
    },
    reducers: {
        restMessage: (state, action) => {
            state.messsage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // post job
            .addCase(fetchPostJobDesc.pending, (state) => {
                state.idLoading = true;
            })
            .addCase(fetchPostJobDesc.fulfilled, (state, action) => {
                state.idLoading = false;
                const { data, message, success } = action.payload;
                console.log(action.payload);
                state.job = data;
                state.messsage = success;
            })
            // deleted job
            .addCase(fetchDeletedJobDesc.pending, (state) => {
                state.idLoading = true;
            })
            .addCase(fetchJobsPagination.pending, (state, action) => {
                state.jobDisplayPagination = action.payload;
            })
            .addCase(fetchDeletedJobDesc.fulfilled, (state, action) => {
                state.idLoading = false;
                const { data, message } = action.payload;
                state.job = data;
                state.messsage = message;
            });
    },
});

// dispatch(fetchPostJobDesc(data));
// post a job
export const fetchPostJobDesc = createAsyncThunk(
    'recruiter/fetchPostJobDesc',
    async (data) => {
        try {
            const res = await postJobDesc(data);
            return res;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);
// deleted job
export const fetchDeletedJobDesc = createAsyncThunk(
    'recruiter/fetchDeletedJobDesc',
    async (id) => {
        try {
            const res = await deletedJobDesc(id);
            return res;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);

// edit job
export const fetchEditJobDesc = createAsyncThunk(
    'recruiter/fetchPostJobDesc',
    async (id, data) => {
        console.log('data fetch', data);
        try {
            // const res = await editJobDesc(id, data);
            // return res.data;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchJobsPagination = createAsyncThunk(
    'recruiter/fetchPostJobDesc',
    async (data) => {
        console.log('data fetch');
        try {
            // const res = await editJobDesc(id, data);
            return data;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);