import React from 'react';
import SearchBar from './SearchBar';

export default function Home({ callQuery }) {
  return (
    <div>
      <SearchBar callQuery={callQuery} />
      <h1>This is the Home Page</h1>
    </div>
  );
}
