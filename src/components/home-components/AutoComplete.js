import React, { useEffect } from 'react';

export default function AutoComplete({
  history,
  setHistory,
  searching,
  setSearching,
}) {
  useEffect(() => {
    let filteredHistory = [];
    if (searching.length > 0) {
      if (history?.length === 0) {
        history = sessionStorage.getItem('searchHistory').split(',');
      }

      filteredHistory = history?.filter(
        (searchTerm) => searchTerm.indexOf(searching.toLowerCase()) !== -1
      );
    }

    if (searching.length === 0) {
      filteredHistory = sessionStorage.getItem('searchHistory')?.split(',');
    }

    setHistory(filteredHistory);
  }, [searching]);
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
