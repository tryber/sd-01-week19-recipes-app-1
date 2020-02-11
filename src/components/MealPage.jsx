import React, { useContext, useEffect } from 'react';
import Categories from './Categories';
// import MealsList from './MealsList';
import context from '../context/context';
import { mealAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
function MealPage() {
  const {
    result,
    setResult,
    setMealsCategory,
    mealsCategory,
  } = useContext(context);

  useEffect(() => {
    mealAPI(`search.php?s=${generateRandomLetter()}`, setResult);
    mealAPI('list.php?c=list', setMealsCategory);
  }, []);

  if (result && mealsCategory) {
    console.log(result);
    return (
      <div>
        <Categories />
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default MealPage;
