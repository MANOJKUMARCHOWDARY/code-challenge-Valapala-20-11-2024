import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
    name: string;
}

interface PokemonState {
    list: Pokemon[];
}

const initialState: PokemonState = {
    list: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList(state, action: PayloadAction<Pokemon[]>) {
            state.list = action.payload;
        },
    },
});

export const { setPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
