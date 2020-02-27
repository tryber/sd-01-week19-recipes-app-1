import React, { useEffect, useContext } from 'react';

import context from '../context/context';
import HeaderWithoutSearch from './HeaderWithoutSearch';

const FoodFavorite = ({ location: { pathname } }) => {
  const { setCurrentFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/receitas-favoritas') {
      setCurrentFood('Receitas Favoritas');
    }
  }, [pathname]);

  return (
    <div>
      <HeaderWithoutSearch />
    </div>
  )

}

export default FoodFavorite;
