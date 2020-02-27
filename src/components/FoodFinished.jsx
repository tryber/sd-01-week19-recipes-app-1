import React, { useEffect, useContext } from 'react';

import context from '../context/context';
import HeaderWithoutSearch from './HeaderWithoutSearch';

const FoodFinished = ({ location: { pathname } }) => {
  const { setCurrentFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/receitas-feitas') {
      setCurrentFood('Receitas Feitas');
    }
  }, [pathname]);

  return (
    <div>
      <HeaderWithoutSearch />
    </div>
  )

}

export default FoodFinished;
