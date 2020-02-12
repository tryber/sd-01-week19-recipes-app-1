import React from 'react';
import Meal from './Meal';
import './Meal.css';

function generateMealsList(result) {
  return result.map((meal) => {
    return <Meal data={meal} />;
  });
}

function MealsList({ result }) {
  return <div className='meal-list'>{generateMealsList(result.meals)}</div>;
}

export default MealsList;
