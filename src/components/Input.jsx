import React, { useContext } from 'react';
import context from '../context/context';
import { DebounceInput } from 'react-debounce-input';
import '../styles/InputSearch.css'

const InputHeader = () => {
  const { searchInput, setSearchInput } = useContext(context);
  console.log(searchInput);
  return (
    <div className="Header_input">
      <DebounceInput
        debounceTimeout={600}
        placeholder="Buscar receita"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div>
        <label> Ingrediente
          <input
          type="radio"
          name="Radio_input-search"
          />
        </label>
        <label> Nome
          <input
          type="radio"
          name="Radio_input-search"
          />
        </label>
        <label> Primeira Letra
          <input
          type="radio"
          name="Radio_input-search"
          />
        </label>
      </div>
    </div>
  );
};

export default InputHeader;
