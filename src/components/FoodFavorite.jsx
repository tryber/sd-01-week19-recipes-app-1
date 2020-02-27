import React, { useEffect, useContext } from 'react';

import context from '../context/context';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import Footer from './Footer';
import '../styles/FoodFavorite.css';

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
      <div className="footer">
        <Footer />
      </div>
    </div>
  )

}

export default FoodFavorite;
