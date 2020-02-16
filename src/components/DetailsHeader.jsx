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
  let data = JSON.parse(localStorage.foodData);
  if (data.meals || data.idMeal) {
    data = data.meals ? data.meals[0] : data;
  } else {
    data = data.drinks ? data.drinks[0] : data;
  }
  if (data.idMeal) {
    return mealHeader(data);
  }
  return drinkHeader(data);
}

export default DetailsHeader;
