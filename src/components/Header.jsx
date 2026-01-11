import React, { useState } from 'react';
import { FaBars, FaSearch, FaMicrophone, FaVideo, FaBell, FaUser } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/youtube.png';
const Header = ({ onMenuClick, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <FaBars />
        </button>
        <div className="logo">
          <img src={logo}YouTube alt="YouTube" />
        </div>
      </div>

      <div className="header-center">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </form>
        <button className="mic-btn">
          <FaMicrophone />
        </button>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <FaVideo />
        </button>
        <button className="icon-btn">
          <FaBell />
        </button>
        <button className="icon-btn">
          <FaUser />
        </button>
      </div>
    </header>
  );
};

export default Header;