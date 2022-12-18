import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import { getDetailPost } from '~/services/jobService';

export const recruitmentDetailSlice = createSlice({
    name: 'recruitmentDetail',
    initialState: {
        idLoading: false,
        messsage: false,
        recruitmentDetailDesc: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailJobDesc.pending, (state) => {
                state.idLoading = true;
            })
            .addCase(fetchDetailJobDesc.fulfilled, (state, action) => {
                state.idLoading = false;
                state.recruitmentDetailDesc = action.payload;
            });
    },
});

// edit job
export const fetchDetailJobDesc = createAsyncThunk(
    'recruitmentDetail/fetchDetailJobDesc',
    async (id) => {
        try {
            const res = await getDetailPost(id);
            return res.data;
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.response);
        }
    },
);
