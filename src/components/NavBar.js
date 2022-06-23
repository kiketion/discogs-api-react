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
          <a href='./Marketplace.js'>Marketplace</a>
        </li>
        <li>
          <a href='./User.js'>User</a>
        </li>
      </ul>
    </nav>
  );
}
