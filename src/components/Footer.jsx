import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../img/drinkIcon.svg';
import explorerIcon from '../img/explorerIcon.svg';
import foodIcon from '../img/foodIcon.svg';
import './Footer.css';


const Footer = () => (
  <div className="Footer_father">
    <Link to="/bebidas">
      <img
        className={'Footer_icon'}
        alt={'drinks icon'}
        src={drinkIcon}
      />
    </Link>
    <Link to="/explorar">
      <img
        className={'Footer_icon'}
        alt={'explore icon'}
        src={explorerIcon}
      />
    </Link>
    <Link to="/comidas">
      <img
        className={'Footer_icon'}
        alt={'meals icon'}
        src={foodIcon}
      />
    </Link>
  </div>
);

export default Footer;
