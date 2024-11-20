import { useGetPokemonQuery } from './store/apiPokSlice';
import { setPokemonList } from './store/pokemonslice';
import { RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../../packages/ui/components/List';
import RecentlyDeleted from '../../../packages/ui/components/RecentlyDeleted';
import { useEffect } from 'react';

// const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const { data, error, isLoading } = useGetPokemonQuery();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);
  const recentlyDeleted = useSelector((state: RootState) => state.pokemon.recentlyDeleted);

  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemonList(data.results));
    }
  }, [data, dispatch]);

  if (isLoading) return <p className="text-center text-gray-500 mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading Pokémon</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-4xl font-bold mb-4 text-center border-b-2 pb-4 text-orangered ">Pokémon List</h2>
      <div className="flex gap-4">
        <div className="w-4/4">
          <List items={pokemonList} />
        </div>

        <div className="w-1/5 flex-wrap">
          <RecentlyDeleted items={recentlyDeleted} />
        </div>
      </div>
    </div>
  );
};


export default App
