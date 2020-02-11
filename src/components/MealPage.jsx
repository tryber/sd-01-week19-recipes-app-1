import React, { useContext, useEffect } from 'react';
import context from '../context/context';
import { mealAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
function MealPage() {
  const {
    initialResult,
    setInitialResult,
    setMealsCategory,
    mealsCategory,
  } = useContext(context);

  useEffect(() => {
    mealAPI(`search.php?s=${generateRandomLetter()}`, setInitialResult);
    mealAPI('list.php?c=list', setMealsCategory);
  }, []);

  if (initialResult && mealsCategory) {
    console.log(mealsCategory.meals.splice(0, 5));
    return <div>iausdiuh</div>;
  }
  return <div>Loading...</div>;
}

export default MealPage;
