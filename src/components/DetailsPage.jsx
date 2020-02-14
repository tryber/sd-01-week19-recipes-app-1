import React, { useEffect } from 'react';
import { mealLocalStorageAPI, drinkLocalStorageAPI } from '../services/foodAPI';
import DetailsHeader from './DetailsHeader';
import DetailsIngredients from './DetailsIngredients';
import DetailsInstructions from './DetailsInstructions';
import DetailsVideo from './DetailsVideo';

function DetailsPage({ match }) {
  useEffect(() => {
    if (match.path === '/receitas/comidas/:id') {
      mealLocalStorageAPI(`lookup.php?i=${match.params.id}`);
    }
    drinkLocalStorageAPI(`lookup.php?i=${match.params.id}`);
  }, []);
  const data = localStorage.foodData;
  if (data) {
    return (
      <div>
        <DetailsHeader />
        <DetailsIngredients />
        <DetailsInstructions />
        <DetailsVideo />
      </div>
    );
  }
  return 'Loading...';
}

export default DetailsPage;
