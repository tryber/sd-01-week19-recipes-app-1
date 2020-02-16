import React, { useEffect, useContext } from 'react';
import context from '../context/context';
import {
  mealLocalStorageAPI,
  drinkLocalStorageAPI,
  mealRecommendedsAPI,
  drinkRecommendedsAPI,
} from '../services/foodAPI';
import DetailsHeader from './DetailsHeader';
import DetailsIngredients from './DetailsIngredients';
import DetailsInstructions from './DetailsInstructions';
import DetailsVideo from './DetailsVideo';
import FoodList from './FoodList';
import '../styles/DetailsIngredients.css';

function DetailsPage({ match }) {
  const { setRecommendeds, recommendeds, setEmpty } = useContext(context);
  useEffect(() => {
    if (match.path === '/receitas/comidas/:id') {
      mealLocalStorageAPI(`lookup.php?i=${match.params.id}`);
      drinkRecommendedsAPI('search.php?f=b', setRecommendeds);
    } else {
      drinkLocalStorageAPI(`lookup.php?i=${match.params.id}`);
      mealRecommendedsAPI('search.php?f=b', setRecommendeds);
    }
    setEmpty();
  }, []);
  const data = localStorage.foodData;
  if (data && recommendeds) {
    return (
      <div>
        <DetailsHeader />
        <DetailsIngredients />
        <DetailsInstructions />
        <DetailsVideo />
        <div>
          <p className="ingredients-title">Recomendadas</p>
          <FoodList result={recommendeds} />
        </div>
      </div>
    );
  }
  return 'Loading...';
}

export default DetailsPage;
