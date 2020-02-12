import React, { useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import context from '../context/context';
import '../styles/InputSearch.css';

const InputSearch = () => {
  const { setSearchInput } = useContext(context);
  return (
    <DebounceInput
      data-testid="search-input"
      debounceTimeout={600}
      placeholder="Buscar receita"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

const InputHeader = () => {
  return (
    <div className="Header_input">
      <InputSearch />
      <div>
        <label htmlFor="ingredients_radio-header">Ingrediente</label>
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="Radio_input-search"
          id="ingredients_radio-header"
        />
        <label htmlFor="name_radio-header">Nome</label>
        <input
          data-testid="name-search-radio"
          type="radio"
          name="Radio_input-search"
          id="name_radio-header"
        />
        <label htmlFor="first-letter_radio-header">Primeira Letra</label>
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="Radio_input-search"
          id="first-letter_radio-header"
        />
      </div>
    </div>
  );
};

export default InputHeader;
