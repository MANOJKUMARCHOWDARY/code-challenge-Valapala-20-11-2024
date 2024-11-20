import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
    name: string;
}

interface PokemonState {
    list: Pokemon[];
    recentlyDeleted: Pokemon[];
}

const initialState: PokemonState = {
    list: [],
    recentlyDeleted: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList(state, action: PayloadAction<Pokemon[]>) {
            state.list = action.payload;
        },
        removePokemon(state, action: PayloadAction<string>) {
            const removed = state.list.find((pokemon) => pokemon.name === action.payload);
            if (removed) {
                state.recentlyDeleted = [removed, ...state.recentlyDeleted].slice(0, 10); // Keep max 10 recent items
                state.list = state.list.filter((pokemon) => pokemon.name !== action.payload);
            }
        },
        restorePokemon(state, action: PayloadAction<string>) {
            const restored = state.recentlyDeleted.find((pokemon) => pokemon.name === action.payload);
            if (restored) {
                state.list = [restored, ...state.list];
                state.recentlyDeleted = state.recentlyDeleted.filter((pokemon) => pokemon.name !== action.payload);
            }
        },
    },
});

export const { setPokemonList, removePokemon, restorePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
