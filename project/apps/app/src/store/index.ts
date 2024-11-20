import { configureStore } from '@reduxjs/toolkit';
import { apiPokSlice } from './apiPokSlice';
import pokemonReducer from './pokemonslice';

export const store = configureStore({
    reducer: {
        [apiPokSlice.reducerPath]: apiPokSlice.reducer,
        pokemon: pokemonReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiPokSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
