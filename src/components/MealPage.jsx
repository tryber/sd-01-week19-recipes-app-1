import React, { useContext, useEffect } from 'react';
import Categories from './Categories';
import MealsList from './MealsList';
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
    mealAPI(`search.php?s=${generateRandomLetter()}`, setResult, true)
    mealAPI('list.php?c=list', setMealsCategory);
    document.title = "Comidas"
  }, []);

  if (mealsCategory && result) {
    return (
      <div>
        <Categories />
        <MealsList result={result}/>
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default MealPage;
