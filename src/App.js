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
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const randomOptions = [
      'Nirvana',
      'Hello',
      'World',
      'Linkin Park',
      'The End',
    ];
    const randomOption = randomOptions[Math.floor(Math.random() * 5)];
    fetch(`${API_URL_SEARCH_URL}${randomOption}&key=${KEY}&secret=${SECRET}`)
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem('nirvana', JSON.stringify(data.results));
        setSearchResult(data.results);
      });
    setSearching(randomOption);
    setHistory([]);
  }, []);

  const fetchMusic = (id, searchType = 'title') => {
    let cachedResult = sessionStorage.getItem(id.toLowerCase());
    // if we have it in cache then we dont fetch it
    if (cachedResult !== null && cachedResult !== undefined) {
      cachedResult = JSON.parse(cachedResult);
      setSearchResult(cachedResult);
    } else {
      fetch(
        `${API_URL_SEARCH_URL}${id}&${searchType}&key=${KEY}&secret=${SECRET}`
      )
        .then((res) => res.json())
        .then((data) => {
          // store search information into session storage
          sessionStorage.setItem(
            id.toLowerCase(),
            JSON.stringify(data.results)
          );
          setSearchResult(data.results);
        });
    }
  };

  const search = async () => {
    let previousSearches = sessionStorage.getItem('searchHistory');
    const searchTerm = searching.toLowerCase().trim();
    if (searchTerm.length === 0) return;

    // checks if we have any previous searches from before
    const haveCache =
      previousSearches !== null && previousSearches !== undefined;

    if (haveCache && !previousSearches.split(',').includes(searchTerm)) {
      sessionStorage.setItem('searchHistory', [
        ...previousSearches.split(','),
        searchTerm,
      ]);
    }

    if (!haveCache) {
      sessionStorage.setItem('searchHistory', [searchTerm]);
    }

    // update search history from cache
    previousSearches = sessionStorage.getItem('searchHistory').split(',');
    setHistory([searchTerm]);
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
                history={history}
                setHistory={setHistory}
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
