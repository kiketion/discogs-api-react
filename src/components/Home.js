import React from 'react';
import DiscBox from './home-components/DiscBox';

export default function Home({ searchResult }) {
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
