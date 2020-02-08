import React from 'react';
import drinkIcon from '../img/drinkIcon.svg';
import explorerIcon from '../img/explorerIcon.svg';
import foodIcon from '../img/foodIcon.svg';
import './Footer.css';

const allIcon = [drinkIcon, explorerIcon, foodIcon]

const Footer = () => (
  <div className="Footer_father">
    {allIcon.map((icon) => (
      <img
        className={'Footer_icon'}
        alt={'footer icon'}
        src={icon}
      />))}
  </div>
)

export default Footer;
