import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from '~/pages/Accounts/accountsSlice';
import { homeSlice } from '~/pages/Home/homeSlice';

const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
        home: homeSlice.reducer,
    },
});

export default store;
