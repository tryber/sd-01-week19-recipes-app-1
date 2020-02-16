import React from 'react';
import '../styles/DetailsInstructions.css';

function identifyData(data) {
  if (data.meals || data.idMeal) {
    return data.meals ? data.meals[0] : data;
  }
  return data.drinks ? data.drinks[0] : data;
}

function DetailsInstructions() {
  let data = JSON.parse(localStorage.foodData);
  return (
    <div>
      <p className="instructions-title">Instructions</p>
      <div className="instructions-details">
        {identifyData(data).strInstructions}
      </div>
    </div>
  );
}

export default DetailsInstructions;
