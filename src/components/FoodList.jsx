import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';
import '../styles/Food.css';

function generateFoodsList(result, pathname) {
  return result.map((food, index) => (
    <Food
      index={index}
      pathname={pathname}
      key={`${food.strSource}`}
      data={food}
    />
  ));
}

function FoodList({ result, pathname }) {
  console.log(result);
  if (pathname === '/receitas/comidas') {
    return (
      <div className="food-list">
        {generateFoodsList(result.meals, pathname)}
      </div>
    );
  }
  return (
    <div className="food-list">
      {generateFoodsList(result.drinks, pathname)}
    </div>
  );
}

FoodList.propTypes = {
  pathname: PropTypes.string.isRequired,
  result: PropTypes.shape({
    meals: PropTypes.string.isRequired,
  }).isRequired,
};
export default FoodList;
