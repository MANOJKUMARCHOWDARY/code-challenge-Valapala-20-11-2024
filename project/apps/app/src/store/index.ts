import { configureStore } from '@reduxjs/toolkit';
import { apiPokSlice } from './apiPokSlice';

export const store = configureStore({
    reducer: {
        [apiPokSlice.reducerPath]: apiPokSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiPokSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
