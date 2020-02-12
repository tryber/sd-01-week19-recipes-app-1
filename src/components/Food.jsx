import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Food.css';

function Food({ data, pathname, index }) {
  if (pathname === '/receitas/comidas') {
    return (
      <Link to={`/receitas/comidas/${data.idMeal}`} className="food-container">
        <div>
          <img data-testid={`${index}-card-img`} src={data.strMealThumb} />
          <p data-testid={`${index}-card-category`} className="food-category">
            {data.strCategory}
          </p>
          <p data-testid={`${index}-card-name`} className="food-name">
            {data.strMeal}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/receitas/bebidas/${data.idDrink}`} className="food-container">
      <div>
        <img data-testid={`${index}-card-img`} src={data.strDrinkThumb} />
        <p data-testid={`${index}-card-category`} className="food-category">
          {data.strCategory}
        </p>
        <p data-testid={`${index}-card-name`} className="food-name">
          {data.strDrink}
        </p>
      </div>
    </Link>
  );
}

Categories.propTypes = {
  pathname: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  data: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }),
};

export default Food;
