import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Pokemon {
  name: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

export const apiPokSlice = createApi({
  reducerPath: 'apiPok',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, void>({
      query: () => 'pokemon?limit=151',
    }),
  }),
});

export const { useGetPokemonQuery } = apiPokSlice;
