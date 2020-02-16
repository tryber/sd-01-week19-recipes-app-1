import React, { useContext, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import IngredientsFromAPI from './IngredientsFromAPI';
import context from '../context/context';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import '../styles/ingredientsExploreScreen.css';

const IngredientsExploreScreen = ({match}) => {
  const { ingredient, setIngredient } = useContext(context);
  useEffect(() => {
    if (match.url.includes('comidas')) {
      return mealAPI('list.php?i=list', setIngredient);
    }
    return drinkAPI('list.php?i=list', setIngredient);
  }, []);

  if (!ingredient) {
    return <div>Loading...</div>
  }
  return (
    <div className="Explore_Ingredients-father">
      <Header />
      <IngredientsFromAPI
        ingredient={ingredient}
        currentFood={match.url}
      />
      <div className="Explore_Ingredients-footer">
        <Footer />
      </div>
    </div>
  );
};

export default IngredientsExploreScreen;
