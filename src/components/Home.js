import React from 'react';
import SearchBar from './home-components/SearchBar';
import DiscBox from './home-components/DiscBox';
import AutoComplete from './home-components/AutoComplete';

export default function Home({
  searchResult,
  searching,
  setSearching,
  search,
  history,
  setHistory,
}) {
  return (
    <div>
      <div className='searchContainer'>
        <SearchBar
          searching={searching}
          setSearching={setSearching}
          search={search}
          setHistory={setHistory}
          history={history}
        />
        <AutoComplete
          history={history}
          setSearching={setSearching}
          searching={searching}
          setHistory={setHistory}
        />
      </div>
      <div className='grid'>
        {searchResult?.map((discReq) =>
          discReq.cover_image !== null &&
          discReq.cover_image !== undefined &&
          discReq.cover_image.indexOf('.gif') === -1 ? (
            <DiscBox
              key={discReq.id}
              title={discReq.title}
              cover_image={discReq.cover_image}
            />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}
