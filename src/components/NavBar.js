import '../styles.css';
import logo from '../assets/discogs-logo.jpg';
import AutoComplete from './nav-components/AutoComplete';
import SearchBar from './nav-components/SearchBar';

export default function NavBar({
  searching,
  setSearching,
  search,
  setHistory,
  history,
  deleteFromSessionStorage,
}) {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>
        <img src={logo} alt='logo' />
      </a>
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
          deleteFromSessionStorage={deleteFromSessionStorage}
        />
      </div>
    </nav>
  );
}
