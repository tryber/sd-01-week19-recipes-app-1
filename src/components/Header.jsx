import React from 'react';
import { Link } from 'react-router-dom';

import IconProfile from '../img/iconProfile.png';
import IconSearch from '../img/iconSearch.png';

import '../styles/Header.css';

function Header() {
  return (
    <div className="Header_separating-icons">
      <Link to="/profile"><img src={IconProfile} alt="Icon Profiler" /></Link>
      <h1>Header</h1>
      <img src={IconSearch} alt="Icon to Search" />
    </div>
  );
}

export default Header;
