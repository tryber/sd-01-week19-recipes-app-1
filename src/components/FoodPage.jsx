import React, { useContext, useEffect } from 'react';
import Categories from './Categories';
import FoodList from './FoodList';
import context from '../context/context';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
function FoodPage({ location: { pathname } }) {
  const {
    result,
    setResult,
    setFoodCategory,
    foodCategory,
    currentFood,
  } = useContext(context);

  useEffect(() => {
    document.title = currentFood;
    if (pathname === '/receitas/comidas') {
      mealAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      mealAPI('list.php?c=list', setFoodCategory);
    } else {
      drinkAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      drinkAPI('list.php?c=list', setFoodCategory);
    }
  }, []);

  if (foodCategory && result) {
    return (
      <div>
        <Categories pathname={pathname}/>
        <FoodList result={result} pathname={pathname} />
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default FoodPage;
