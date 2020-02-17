import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import context from '../context/context';
import Header from './Header';
import Footer from './Footer';
import '../styles/ExploreOrigin.css';
import ExploreDropdown from './ExploreDropdown';

const ExploreOrigin = ({ location: { pathname }}) => {
  const { setCurrentFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/explorar/comidas/area') {
      setCurrentFood('Explorar Origem');
    }

  }, [pathname]);

  return (
    <div>
      <Header />
      <div>
        <ExploreDropdown />
      </div>
      <div className="Explore_Origin_container">
        <Footer />
      </div>
    </div>
  );
};

ExploreOrigin.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreOrigin;
