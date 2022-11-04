import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from '~/pages/Accounts/accountsSlice';
import { cvSlice } from '~/pages/CV/cvSlice';
import { homeSlice } from '~/pages/Home/homeSlice';

const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
        home: homeSlice.reducer,
        cv: cvSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

export default store;
