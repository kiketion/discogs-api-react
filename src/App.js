import Marketplace from './components/Marketplace.js';
import NavBar from './components/NavBar.js';
import User from './components/User.js';
import Home from './components/Home.js';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const KEY = 'EYYsdVeysyPxPbldMRZm';
  const SECRET = 'DqFilmgPjPGqDFfLNlGQPngwoYQfzVPU';
  const BASE_URL = 'https://api.discogs.com';

  const getReleases = async () => {
    console.log(await axios.get(`${BASE_URL}/releases`));
  };

  const callQuery = async (query, type) => {
    if (type === undefined || type === null) {
      await axios.get(`${BASE_URL}/releases/${query}`);
    }
    console.log(
      await axios.get(`${BASE_URL}/database/search?q={${query}}&{?${type}}`)
    );
  };

  // getReleases();

  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home callQuery={callQuery} />}></Route>
          <Route path='/marketplace' element={<Marketplace />}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
