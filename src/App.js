import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import { useEffect, useState } from 'react';

function App() {
  const KEY = 'EYYsdVeysyPxPbldMRZm';
  const SECRET = 'DqFilmgPjPGqDFfLNlGQPngwoYQfzVPU';
  const API_URL_SEARCH_URL = 'https://api.discogs.com/database/search?q=';

  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function firstCall() {
      await toggleLogIn();
    }
    firstCall();
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
    const searchTerm = searching.trim();
    if (searchTerm.length === 0) return;

    // checks if we have any previous searches from before
    const haveCache =
      previousSearches !== null && previousSearches !== undefined;

    if (haveCache && !previousSearches.split(',').includes(searchTerm)) {
      sessionStorage.setItem('searchHistory', [
        searchTerm,
        ...previousSearches.split(',').slice(0, 4),
      ]);
    }

    if (!haveCache) {
      sessionStorage.setItem('searchHistory', [searchTerm]);
    }

    if (haveCache && previousSearches.split(',').includes(searchTerm)) {
      const searchTermIndex = previousSearches.split(',').indexOf(searchTerm);
      const newSearchHistory = [
        ...previousSearches.split(',').slice(0, searchTermIndex),
        ...previousSearches.split(',').slice(searchTermIndex + 1),
      ];

      sessionStorage.setItem('searchHistory', [
        searchTerm,
        ...newSearchHistory.slice(0, 4),
      ]);
    }
    // update search history from cache
    previousSearches = sessionStorage.getItem('searchHistory').split(',');
    setHistory([]);
    await fetchMusic(searchTerm);
  };

  // will pick a word at random and search it
  // so we have something displayed at log in/ opening the page
  const toggleLogIn = async () => {
    const randomOptions = [
      'Nirvana',
      'Guns and Roses',
      'Metallica',
      'Linkin Park',
      'Pink Floyd',
    ];
    const randomOption = randomOptions[Math.floor(Math.random() * 5)];
    await fetchMusic(randomOption);
    setHistory([]);
    setSearching(randomOption);
  };

  return (
    <div className='App'>
      <NavBar
        searching={searching}
        setSearching={setSearching}
        search={search}
        history={history}
        setHistory={setHistory}
      />
      <Home searchResult={searchResult} />
    </div>
  );
}

export default App;
