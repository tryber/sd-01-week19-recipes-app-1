import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import meatAPI from '../services/foodAPI';
import cocktailAPI from '../services/drinkAPI';

const validateURL = window.location.href;

const []

const isURL = (inputValue) => {

};

const inputHeader = () => (
  <div>
    <DebounceInput

      placeholder="Buscar receita"
      onChange={(e) => isURL(e.target.value)}
    />
  </div>
);

export default inputHeader;
