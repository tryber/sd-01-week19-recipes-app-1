import React from 'react';
import Food from './Food';
import './Food.css';

function generateFoodsList(result, pathname) {
  return result.map((food, index) => {
    return (
      <Food
        index={index}
        pathname={pathname}
        key={`${food.idfood}1`}
        data={food}
      />
    );
  });
}

function FoodList({ result, pathname }) {
  if (pathname === '/receitas/comidas') {
    return (
      <div className="food-list">
        {generateFoodsList(result.meals, pathname)}
      </div>
    );
  }
  return (
    <div className="food-list">
      {generateFoodsList(result.drinks, pathname)}{' '}
    </div>
  );
}

export default FoodList;
