import React from 'react';

interface Pokemon{
    name : string;
}

interface ListProps{
    items : Pokemon[]
}


const List: React.FC<ListProps> = ({ items }) => (
    <div className="p-4">
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.map((item) => (
                <li
                    key={item.name}
                    className="bg-white shadow-md hover:shadow-lg hover:bg-orangered hover:text-white rounded-lg p-4 text-center transition-transform transform hover:scale-105"
                >
                    <p className="text-lg font-semibold capitalize">{item.name}</p>
                    </li>
            ))}
        </ul>
    </div>
);

export default List;