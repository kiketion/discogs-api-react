import '../styles.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Reactify
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
