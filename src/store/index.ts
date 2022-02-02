import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './requestSlice';

const store = configureStore({
    reducer: {
        request: requestSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
