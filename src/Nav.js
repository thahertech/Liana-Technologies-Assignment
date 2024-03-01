import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Assets/liana-logo-ai.png';
import SearchBar from './Components/SearchBar';
import './Styles/Nav.css';

function Navigation() {
  return (
    <header>
      <nav className="first-row">
      <div className="first-row-links">
        <Link to="/news">News</Link>
        <Link to="/intranet">Intranet</Link>
      </div>


        <div className="dropdown">
          <button className="dropbtn">
            <i className="bx bx-plus-circle"></i>
            In English
          </button>
          <div className="dropdown-content">
            <a href="#english">In English</a>
            <a href="#suomeksi">Suomeksi</a>
            <a href="#french">Français</a>
            <a href="#arabic">Arabic</a>
            <a href="#german">German</a>
            <a href="#chinese">Chinese</a>
          </div>
        </div>
      </nav>

      <nav className="second-row">
        <Link to="/">
          <img src={Logo} alt='Company Logo' />
        </Link>
        <Link to="/company">Company</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <nav className="search-bar">
          <SearchBar />
        </nav>
      </nav>
    </header>
  );
}

export default Navigation;
