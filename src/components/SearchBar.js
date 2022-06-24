import '../styles.css';
import { useState } from 'react';

export default function SearchBar({ callQuery }) {
  const handleQuery = (target) => {
    const query = target.value.trim().toLowerCase();
    if (query.length === 0) {
      callQuery(10);
    } else {
      callQuery(query, 'title');
    }
  };
  return (
    <div className='searchbar'>
      <input
        className='bar'
        placeholder='Artists, albums and more...'
        onChange={({ target }) => handleQuery(target)}
      />
      <button className='button' type='submit'>
        SEARCH
      </button>
    </div>
  );
}
