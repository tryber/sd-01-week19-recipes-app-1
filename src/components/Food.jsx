import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/context';
import { Link } from 'react-router-dom';
import '../styles/Food.css';

function saveFood(data) {
  localStorage.setItem('foodData', JSON.stringify(data));
}

function meal(data, index) {
  return (
    <Link
      to={`/receitas/comidas/${data.idMeal}`}
      onClick={() => saveFood(data)}
      className="food-container"
    >
      <div>
        <img
          className="food-image"
          data-testid={`${index}-card-img`}
          src={data.strMealThumb}
          alt="img"
        />
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

function drink(data, index) {
  return (
    <Link
      to={`/receitas/bebidas/${data.idDrink}`}
      onClick={() => saveFood(data)}
      className="food-container"
    >
      <div>
        <img
          className="food-image"
          data-testid={`${index}-card-img`}
          src={data.strDrinkThumb}
          alt="img"
        />
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

function Food({ data, index }) {
  const { setRecommendeds } = useContext(context);
  // useEffect(() => {
  //   return () => {
  //     setRecommendeds();
  //   };
  // }, []);
  if (data.idMeal) {
    return meal(data, index);
  }
  return drink(data, index);
}

Food.propTypes = {
  index: PropTypes.string.isRequired,
  data: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Food;
