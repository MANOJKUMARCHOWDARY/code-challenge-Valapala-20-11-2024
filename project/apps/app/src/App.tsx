import { useGetPokemonQuery } from './store/apiPokSlice';
import List from '../../../packages/ui/components/List';

// const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  if (isLoading) return <p className="text-center text-gray-500 mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading Pokémon</p>;

  return (
      <div className="bg-gray-100 min-h-screen p-4">
          <h2 className="text-4xl font-bold mb-4 text-center border-b-2 pb-4 text-orangered ">Pokémon List</h2>
          <List items={data?.results || []} />
      </div>
  );
};


export default App
