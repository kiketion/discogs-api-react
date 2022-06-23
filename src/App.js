import Marketplace from './components/Marketplace.js';
import NavBar from './components/NavBar.js';
import User from './components/User.js';
import Home from './components/Home.js';

function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/marketplace':
      component = <Marketplace />;
      break;
    case '/user':
      component = <User />;
      break;
    default:
  }
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>{component}</div>
    </div>
  );
}

export default App;
