import React from 'react';
import SearchBar from './home-components/SearchBar';
import DiscBox from './home-components/DiscBox';

export default function Home({
  searchResult,
  searching,
  setSearching,
  search,
}) {
  return (
    <div>
      <SearchBar
        searching={searching}
        setSearching={setSearching}
        search={search}
      />
      <div className='grid'>
        {searchResult?.map((discReq) => (
          <DiscBox key={discReq.id} {...discReq} />
        ))}
      </div>
    </div>
  );
}
