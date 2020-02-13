import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import IconProfile from '../img/iconProfile.png';
import IconSearch from '../img/iconSearch.png';
import InputHeader from './Input';
import context from '../context/context';
import '../styles/Header.css';
import '../styles/inputSearch.css';


const Header = () => {
  const { isShowInput, setIsShowInput } = useContext(context);
  return (
    <div>
      <div className="Header_separating-icons">
        <Link to="/profile"><img src={IconProfile} alt="Icon Profiler" /></Link>
        <h1>Header</h1>
        <input
          type="image"
          src={IconSearch}
          alt="Icon to Search"
          onClick={() => setIsShowInput(!isShowInput)}
        />
      </div>
      <InputHeader />
    </div>
  );
};


export default Header;
