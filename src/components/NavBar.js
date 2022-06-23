import SearchBar from './SearchBar';
import '../styles.css';

export default function NavBar() {
  return (
    <nav className='nav'>
      <SearchBar />
      <a href='/' className='site-title'>
        Reactify
      </a>
      <ul>
        <li>
          <a href='/marketplace'>Marketplace</a>
        </li>
        <li>
          <a href='/user'>User</a>
        </li>
      </ul>
    </nav>
  );
}
