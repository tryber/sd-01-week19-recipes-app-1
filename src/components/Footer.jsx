import React from 'react';
import drinkIcon from '../img/drinkIcon.svg';
import explorerIcon from '../img/explorerIcon.svg';
import foodIcon from '../img/foodIcon.svg';
import './Footer.css';

const Footer = () => (
  <div className="Footer_father">
    <div>
      <img alt={'drink-icon'} src={drinkIcon} />
    </div>
    <div>
      <img alt={'explorer-icon'} src={explorerIcon} />
    </div>
    <div>
      <img alt={'food-icon'} src={foodIcon} />
    </div>
  </div>
)

export default Footer;
