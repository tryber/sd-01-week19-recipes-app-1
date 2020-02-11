import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../img/drinkIcon.svg';
import explorerIcon from '../img/explorerIcon.svg';
import foodIcon from '../img/foodIcon.svg';
import '../styles/Footer.css';


const Footer = () => (
  <div className="Footer_father">
    <Link to="/cocktails">
      <img
        className={'Footer_icon'}
        alt={'footer icon'}
        src={drinkIcon}
      />
    </Link>
    <Link to="/explore">
      <img
        className={'Footer_icon'}
        alt={'footer icon'}
        src={explorerIcon}
      />
    </Link>
    <Link to="/meals">
      <img
        className={'Footer_icon'}
        alt={'footer icon'}
        src={foodIcon}
      />
    </Link>
  </div>
);

export default Footer;
