import React, { useContext } from 'react';
import context from '../context/context';
import { DebounceInput } from 'react-debounce-input';

const inputHeader = () => {
  const { setSearchInput } = useContext(context)
  return (
    <div>
      <DebounceInput
        debounceTimeout={600}
        placeholder="Buscar receita"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default inputHeader;
