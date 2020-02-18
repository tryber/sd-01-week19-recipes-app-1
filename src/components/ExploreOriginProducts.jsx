import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/ExploreOriginProducts.css';


const ExploreOriginProducts = () => {

  const localStorageFilter = JSON.parse(localStorage.filterFood);
  useEffect(() => {
  }, [localStorage.filterFood]);

  return (
    <div className="Explore_Origin_Products-API">
      {localStorageFilter.map((food) => 
        <Link
          to={`/receitas/comidas/${food.idMeal}`}
          className="Explore_Origin_Products-container"
          key={food.idMeal}
        >
          <div>
            <img
              className="Explore_Origin_Products-image"
              src={food.strMealThumb}
              alt="img"
            />
            <p className="Explore_Origin_Products-category">
              {food.strCategory}
            </p>
            <p className="Explore_Origin_Products-name">
              {food.strMeal}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ExploreOriginProducts;
