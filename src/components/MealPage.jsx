import React, { useContext, useEffect } from 'react';
import context from '../context/context';
import { mealAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
function MealPage() {
  const { initialResult, setInitialResult } = useContext(context);
  useEffect(() => {
    mealAPI(`search.php?s=${generateRandomLetter()}`, setInitialResult);
  }, []);

  if (initialResult) {
    return <div>{initialResult.meals[0].strMeal}</div>;
  }
  return <div>Loading...</div>;
}

export default MealPage;
