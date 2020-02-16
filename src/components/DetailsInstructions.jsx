import React from 'react';
import '../styles/DetailsInstructions.css';

function DetailsInstructions() {
  let data = JSON.parse(localStorage.foodData);
  if (data.meals) {
    data = data.meals[0];
  } else {
    data = data.drinks[0];
  }
  return (
    <div>
      <p className="instructions-title">Instructions</p>
      <div className="instructions-details">{data.strInstructions}</div>
    </div>
  );
}

export default DetailsInstructions;
