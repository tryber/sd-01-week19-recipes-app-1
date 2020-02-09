import React from 'react';
import meatAPI from '../services/foodAPI';
import cocktailAPI from '../services/drinkAPI';

const isURL = (inputValue) => {
  if (/meals/.test(window.location.href)) {
    return meatAPI(inputValue);
  } else if (/cocktails/.test(window.location.href)) {
    return cocktailAPI(inputValue);
  }
  return;
};

const inputHeader = () => (
  <div>
    <input
      placeholder="Buscar receita"
      onChange={(e) => isURL(e.target.value)}
    />
  </div>
);

export default inputHeader;
