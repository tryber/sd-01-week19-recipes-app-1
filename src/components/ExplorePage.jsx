import React from 'react';
import { Link } from 'react-router-dom';

const ExplorePage = () => {
  return (
    <div>
      <Link to="/explorar/comidas">
        <button>Explorar Comidas</button>
      </Link>
      <Link to="/explorar/bebidas">
        <button>Explorar Comidas</button>
      </Link>
    </div>
  );
};

export default ExplorePage;
