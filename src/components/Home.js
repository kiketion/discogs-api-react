import React from 'react';
import SearchBar from './nav-components/SearchBar';
import DiscBox from './home-components/DiscBox';
import AutoComplete from './nav-components/AutoComplete';

export default function Home({
  searchResult,
  searching,
  setSearching,
  search,
  history,
  setHistory,
}) {
  return (
    <div className='container'>
      <div className='grid'>
        {searchResult?.map((discReq) =>
          discReq.cover_image !== null &&
          discReq.cover_image !== undefined &&
          discReq.cover_image.indexOf('.gif') === -1 ? (
            <DiscBox
              key={discReq.id}
              title={discReq.title}
              cover_image={discReq.cover_image}
              format={discReq.format}
              year={discReq.year}
            />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}
