import React from 'react';
import searchicon from '../../assets/search-icon.jpg';

export default function SearchBar({
  searching,
  setSearching,
  search,
  setHistory,
}) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearching(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await search();
  };

  // makes the autocomplete appear whenever we click the input bar
  const handleClick = () => {
    const history = sessionStorage.getItem('searchHistory')?.split(',');
    if (searching.length > 0) {
      let filteredHistory = history.filter(
        (searchTerm) => searchTerm.indexOf(searching.toLowerCase()) !== -1
      );
      filteredHistory = filteredHistory?.includes(searching.toLowerCase())
        ? []
        : filteredHistory;
      return filteredHistory;
    }

    return history;
  };

  return (
    <form className='searchbar' onSubmit={(e) => handleSubmit(e)}>
      <input
        className='bar'
        placeholder='Artist, Albums, Songs, ...'
        value={searching}
        onClick={() => setHistory(handleClick())}
        onChange={(e) => handleSearch(e)}
        onBlur={() =>
          setTimeout(() => {
            setHistory([]);
          }, 100)
        }
      ></input>
      <button className='button' type='submit'>
        <img src={searchicon} alt='search-icon' className='search-icon' />
      </button>
    </form>
  );
}
