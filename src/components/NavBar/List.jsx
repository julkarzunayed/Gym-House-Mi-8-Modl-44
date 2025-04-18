import React from 'react';

const List = ({rout}) => {
    return (
        <li className='hover:bg-amber-500 p-1 rounded-md'>
            <a href={rout.url}>{rout.name}</a>
        </li>
    );
};

export default List;