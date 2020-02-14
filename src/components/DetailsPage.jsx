import React, { useEffect, useContext } from 'react';
import context from '../context/context';
import {
  mealLocalStorageAPI,
  drinkLocalStorageAPI,
  mealAPI,
  drinkAPI,
} from '../services/foodAPI';
import DetailsHeader from './DetailsHeader';
import DetailsIngredients from './DetailsIngredients';
import DetailsInstructions from './DetailsInstructions';
import DetailsVideo from './DetailsVideo';
import FoodList from './FoodList';

function DetailsPage({ match }) {
  const { setRecommendeds, recommendeds } = useContext(context);
  useEffect(() => {
    if (match.path === '/receitas/comidas/:id') {
      mealLocalStorageAPI(`lookup.php?i=${match.params.id}`);
      mealAPI('search.php?f=b', setRecommendeds);
    }
    drinkLocalStorageAPI(`lookup.php?i=${match.params.id}`);
    drinkAPI('search.php?f=b', setRecommendeds);
  }, []);
  const data = localStorage.foodData;
  if (data && recommendeds) {
    return (
      <div>
        <DetailsHeader />
        <DetailsIngredients />
        <DetailsInstructions />
        <DetailsVideo />
        {/* <FoodList result={recommendeds} /> */}
      </div>
    );
  }
  return 'Loading...';
}

export default DetailsPage;
