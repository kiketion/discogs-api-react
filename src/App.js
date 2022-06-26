import Marketplace from './components/Marketplace.js';
import NavBar from './components/NavBar.js';
import User from './components/User.js';
import Home from './components/Home.js';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const KEY = 'EYYsdVeysyPxPbldMRZm';
  const SECRET = 'DqFilmgPjPGqDFfLNlGQPngwoYQfzVPU';
  const API_URL_SEARCH_URL = 'https://api.discogs.com/database/search?q=';

  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState('');

  useEffect(() => {
    fetch(`${API_URL_SEARCH_URL}Nirvana&key=${KEY}&secret=${SECRET}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results);
      });
  }, []);

  const fetchMusic = (id, searchType = 'title') => {
    let cachedResult = sessionStorage.getItem(id.toLowerCase());
    if (cachedResult !== null && cachedResult !== undefined) {
      cachedResult = JSON.parse(cachedResult);
      setSearchResult(cachedResult);
    } else {
      fetch(
        `${API_URL_SEARCH_URL}${id}&${searchType}&key=${KEY}&secret=${SECRET}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(Data.results);
          sessionStorage.setItem(
            id.toLowerCase(),
            JSON.stringify(data.results)
          );
          setSearchResult(data.results);
        });
    }
  };

  const search = async () => {
    const previousSearches = sessionStorage.getItem('search');
    const searchTerm = searching.toLowerCase();

    const haveCache =
      previousSearches !== null && previousSearches !== undefined;

    if (haveCache && !previousSearches.split(',').includes(searchTerm)) {
      sessionStorage.setItem('search', [
        ...previousSearches.split(','),
        searchTerm,
      ]);
    }

    if (!haveCache) {
      sessionStorage.setItem('search', [searchTerm]);
    }

    await fetchMusic(searchTerm);
  };

  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                searchResult={searchResult}
                searching={searching}
                setSearching={setSearching}
                search={search}
              />
            }
          ></Route>
          <Route path='/marketplace' element={<Marketplace />}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
