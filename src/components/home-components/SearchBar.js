import React from 'react';

export default function SearchBar({ searching, setSearching, search }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearching(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await search();
  };

  return (
    <form className='searchbar' onSubmit={(e) => handleSubmit(e)}>
      <input
        className='bar'
        placeholder='Artist, Albums, Songs, ...'
        value={searching}
        onInput={(e) => handleSearch(e)}
      ></input>
      <button className='button' type='submit'>
        Search
      </button>
    </form>
  );
}
