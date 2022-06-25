import '../styles.css';
import { Link } from 'react-router-dom';
import logo from '../assets/discogs-logo.jpeg';

export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        <img src={logo} alt='logo' />
      </Link>
      <ul>
        <li>
          <Link to='/marketplace'>Marketplace</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
      </ul>
    </nav>
  );
}
