import React from 'react';
import '../styles/DetailsInstructions.css';

function DetailsInstructions() {
  let data = JSON.parse(localStorage.foodData);
  if (data.meals || data.idMeal) {
    data = data.meals ? data.meals[0] : data;
  } else {
    data = data.drinks ? data.drinks[0] : data;
  }
  return (
    <div>
      <p className="instructions-title">Instructions</p>
      <div className="instructions-details">{data.strInstructions}</div>
    </div>
  );
}

export default DetailsInstructions;
