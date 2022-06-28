import React, { useEffect } from 'react';

export default function AutoComplete({
  history,
  setHistory,
  searching,
  setSearching,
}) {
  // we refresh the auto-complete as we type on the search bar
  useEffect(() => {
    let filteredHistory = [];
    if (searching.length > 0) {
      // if we have nothing in history then we start it from our cache
      if (history?.length === 0) {
        history = sessionStorage.getItem('searchHistory')?.split(',');
      }

      filteredHistory = history?.filter(
        (searchTerm) =>
          searchTerm.toLowerCase().indexOf(searching.toLowerCase()) !== -1
      );
    }

    if (searching.length === 0) {
      filteredHistory = sessionStorage.getItem('searchHistory')?.split(',');
    }

    // if we have the word fully written then we dont need the autocomplete
    filteredHistory?.includes(searching.toLowerCase())
      ? setHistory([])
      : setHistory(filteredHistory);
  }, [searching /* we refresh depending on the search term (searching)*/]);
  const handleClick = (searchTerm) => {
    setSearching(searchTerm);
  };

  return (
    <div className='dropdown-content'>
      {history &&
        history.map((searchTerm) => (
          <div
            className='auto-complete-term'
            onClick={() => handleClick(searchTerm)}
            value={searchTerm}
          >
            {searchTerm}
          </div>
        ))}
    </div>
  );
}
