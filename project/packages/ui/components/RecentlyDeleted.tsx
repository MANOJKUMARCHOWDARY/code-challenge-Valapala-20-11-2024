import React from 'react';
import { useDispatch } from 'react-redux';
import { restorePokemon } from '../../../apps/app/src/store/pokemonslice';

interface Pokemon {
    name: string;
}

interface RecentlyDeletedProps {
    items: Pokemon[];
}

const RecentlyDeleted: React.FC<RecentlyDeletedProps> = ({ items }) => {
    const dispatch = useDispatch();

    const handleRestore = (name: string) => {
        dispatch(restorePokemon(name));
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Recently Deleted</h2>
            {items.length === 0 ? (
                <p className="text-center text-gray-500">No recently deleted Pokémon.</p>
            ) : (
                <div>
                    {items.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center w-full md:w-auto m-2"
                        >
                            <p className="text-lg font-semibold capitalize">{item.name}</p>
                            <button
                                onClick={() => handleRestore(item.name)}
                                className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                            >
                                Restore
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecentlyDeleted;
