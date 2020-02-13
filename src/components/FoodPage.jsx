import React, { useContext, useEffect } from 'react';
import Categories from './Categories';
import Footer from './Footer';
import FoodList from './FoodList';
import context from '../context/context';
import Header from './Header';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';

function FoodPage({location: { pathname }}) {
  const {
    result,
    setResult,
    setFoodCategory,
    foodCategory,
    currentFood,
    isShowInput,
  } = useContext(context);

  useEffect(() => {
    document.title = currentFood;
    if (pathname === '/receitas/comidas') {
      setResult();
      mealAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      mealAPI('list.php?c=list', setFoodCategory);
    } else {
      setResult();
      drinkAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      drinkAPI('list.php?c=list', setFoodCategory);
    }
  }, []);
  useEffect(() => {
    document.title = currentFood;
    if (pathname === '/receitas/comidas') {
      setResult();
      mealAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      mealAPI('list.php?c=list', setFoodCategory);
    } else {
      setResult();
      drinkAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      drinkAPI('list.php?c=list', setFoodCategory);
    }
  }, [pathname]);
console.log(result);
  if (foodCategory && result) {
    if (isShowInput) {
      return (
        <div>
          <Header />
          <FoodList result={result} pathname={pathname} />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <Categories pathname={pathname} />
        <FoodList result={result} pathname={pathname} />
        <Footer />
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default FoodPage;
