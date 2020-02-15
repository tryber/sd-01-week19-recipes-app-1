import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import context from '../context/context';
import Header from './Header';
import Footer from './Footer';
import '../styles/ExplorePage.css';

const ExplorePage = ({ location: { pathname } }) => {
  const { setCurrentFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/explorar') {
      setCurrentFood('Explorar');
    }
  }, [pathname]);

  return (
    <div>
      <Header />
      <div className="center-buttons">
        <Link to="/explorar/comidas">
          <button data-testid="explore-food" className="button">Explorar Comidas</button>
        </Link>
        <Link to="/explorar/bebidas">
          <button data-testid="explore-drinks" className="button">Explorar Comidas</button>
        </Link>
      </div>
      <div className="explore-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ExplorePage;
