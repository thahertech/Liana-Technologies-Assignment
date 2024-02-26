import { Link } from 'react-router-dom';
import Logo from './Assets/liana-logo-ai.png';
import SearchBar from './Components/SearchBar';
import './Styles/Nav.css';

function Navigation() {
  return (
    <header>
      <nav className="first-row">
        <Link to="/news">News</Link>
        <Link to="/intranet">Intranet</Link>
      </nav>

      <nav className="second-row">
        <Link to="/">
          <img src={Logo} alt='Company Logo' />
        </Link>
        <Link to="/company">Company</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <nav className="search-bar">
        </nav>

      <SearchBar />
      </nav>
    </header>
  );
}

export default Navigation;
