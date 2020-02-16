import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import context from '../context/context';
import Header from './Header';
import Footer from './Footer';
import '../styles/Explore.css';

const ExploreFood = ({ location: { pathname } }) => {
  const {
    setCurrentFood,
    enableButton,
    setEnableButton,
    route,
    setRoute,
  } = useContext(context);

  useEffect(() => {
    if (pathname === '/explorar/comidas') {
      setCurrentFood('Explorar Comidas');
      setEnableButton(false);
      setRoute('/explorar/comidas/ingredientes');
    } else {
      setCurrentFood('Explorar Bebidas');
      setEnableButton(true);
      setRoute('/explorar/bebidas/ingredientes');
    }
  }, [pathname]);

  return (
    <div>
      <Header />
      <div className="center-buttons">
        <Link to={route}>
          <button data-testid="explore-by-ingredient" className="button">Por ingredientes</button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            data-testid="explore-by-area"
            className="button"
            disabled={enableButton}
          >
          Por local de origem
          </button>
        </Link>
        <Link>
          <button data-testid="explore-surprise" className="button">Me surpreenda!</button>
        </Link>
      </div>
      <div className="explore-footer">
        <Footer />
      </div>
    </div>
  );
};

ExploreFood.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreFood;
