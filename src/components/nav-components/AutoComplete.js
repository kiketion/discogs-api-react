import React, { useEffect } from 'react';

export default function AutoComplete({
  history,
  setHistory,
  searching,
  setSearching,
  deleteFromSessionStorage,
  search,
}) {
  // we refresh the auto-complete as we type on the search bar
  useEffect(() => {
    let filteredHistory = [];
    if (searching.length > 0) {
      // if we have nothing in history then we start it from our cache
      filteredHistory = sessionStorage.getItem('searchHistory')?.split(',');

      filteredHistory = filteredHistory?.filter(
        (searchTerm) =>
          searchTerm
            .substring(0, searching.length)
            .toLowerCase()
            .indexOf(searching.toLowerCase().trim()) !== -1
      );
    }

    if (searching.length === 0) {
      filteredHistory = sessionStorage.getItem('searchHistory')?.split(',');
    }
    // if we have the word fully written then we dont need the autocomplete
    filteredHistory?.includes(searching.toLowerCase()) &&
    filteredHistory?.length === 1
      ? setHistory([])
      : setHistory(filteredHistory);
  }, [searching /* we refresh depending on the search term (searching)*/]);

  const handleClick = async (searchTerm) => {
    setSearching(searchTerm);
    await search(searchTerm);
  };

  const handleDelete = (deletingTerm) => {
    deleteFromSessionStorage(deletingTerm);
  };

  return (
    <div className='dropdown-content'>
      {history &&
        history.map((searchTerm) => (
          <div className='dropdown-item'>
            <div
              className='auto-complete-term'
              onClick={() => handleClick(searchTerm)}
              value={searchTerm}
            >
              <p>{searchTerm}</p>
            </div>
            <div
              className='delete-button'
              onClick={() => handleDelete(searchTerm)}
            >
              <p id='delete-text'>delete</p>
            </div>
          </div>
        ))}
    </div>
  );
}
