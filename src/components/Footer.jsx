import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../img/drinkIcon.svg';
import explorerIcon from '../img/explorerIcon.svg';
import foodIcon from '../img/foodIcon.svg';
<<<<<<< HEAD
import '../styles/Footer.css';
=======
import './Footer.css';
>>>>>>> a0bc5b78278ce79377c8062319829e2e0bb1c59f

const Footer = () => (
  <div className="Footer_father">
    <Link to="/bebidas">
      <img
        className={'Footer_icon'}
        data-testid="drinks-bottom-btn"
        alt={'drinks icon'}
        src={drinkIcon}
      />
    </Link>
    <Link to="/explorar">
      <img
        className={'Footer_icon'}
        data-testid="explore-bottom-btn"
        alt={'explore icon'}
        src={explorerIcon}
      />
    </Link>
    <Link to="/comidas">
      <img
        className={'Footer_icon'}
        data-testid="food-bottom-btn"
        alt={'meals icon'}
        src={foodIcon}
      />
    </Link>
  </div>
);

export default Footer;
