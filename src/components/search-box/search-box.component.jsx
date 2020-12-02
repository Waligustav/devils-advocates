import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder}
        //Trigger synthetic onChange event and updating state with real-time user-input 
        onChange={handleChange}
    />
)