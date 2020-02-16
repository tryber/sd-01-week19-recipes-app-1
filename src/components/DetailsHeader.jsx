import React from 'react';
import '../styles/DetailsHeader.css';

function mealHeader(data) {
  const { strMealThumb, strMeal, strCategory } = data;
  return (
    <div>
      <img src={strMealThumb} alt={strMeal} className="image-details" />
      <div className="details-name-share-container">
        <p className="details-name">{strMeal}</p>
        <div>Share/Favorite</div>
      </div>
      <p className="details-category">{strCategory}</p>
    </div>
  );
}

function drinkHeader(data) {
  const { strDrinkThumb, strDrink, strCategory } = data;
  return (
    <div>
      <img src={strDrinkThumb} alt={strDrink} className="image-details" />
      <div className="details-name-share-container">
        <p className="details-name">{strDrink}</p>
        <div>Share/Favorite</div>
      </div>
      <p className="details-category">{strCategory}</p>
    </div>
  );
}
function DetailsHeader() {
  const data = JSON.parse(localStorage.foodData);
  if (data.meals) {
    return mealHeader(data.meals[0]);
  }
  return drinkHeader(data.drinks[0]);
}

export default DetailsHeader;
