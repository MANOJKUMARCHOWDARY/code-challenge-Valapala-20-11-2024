import React from 'react';
import { useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/store/pokemonslice';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Pokemon {
    name: string;
}

interface ListProps {
    items: Pokemon[];
}

const List: React.FC<ListProps> = ({ items }) => {
    const dispatch = useDispatch();

    const handleRemove = (name: string) => {
        console.log(`Dispatching removePokemon for ${name}`);
        dispatch(removePokemon(name));
    };

    return (
        <div className="p-4">
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {items.map((item) => (
                    <li
                        key={item.name}
                        className="group bg-white shadow-md hover:bg-orangered hover:text-white rounded-lg p-4 text-center transition-transform transform hover:scale-105"
                    >
                       <div className='flex gap-2 justify-between items-center'>
                       <p className="text-lg font-semibold capitalize m-0">{item.name}</p>
                       <span className='mt-2 px-4 py-2 bg-white text-orangered rounded border-2 border-orangered group-hover:bg-white group-hover:text-orangered transition cursor-pointer' onClick={() => handleRemove(item.name)}><FontAwesomeIcon icon={faTrash} /></span>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
