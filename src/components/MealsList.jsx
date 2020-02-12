import React from 'react';
import Meal from './Meal';

function generateMealsList(result) {
  return result.map((meal) => {
    return <Meal data={meal} />;
  });
}

function MealsList({ result }) {
  return <div>{generateMealsList(result.meals)}</div>;
}

export default MealsList;
