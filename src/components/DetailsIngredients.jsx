import React from 'react';
import '../styles/DetailsIngredients.css';

function generateIngredients(data) {
  let index = 1;
  const array = [];
  while (data[`strIngredient${index}`]) {
    array.push(
      ` - ${data[`strIngredient${index}`]} - ${data[`strMeasure${index}`]}`,
    );
    index += 1;
  }
  return (
    <div className="ingredients-container">
      {array.map((ingredient) => (
        <p classNama="ingredient">{ingredient}</p>
      ))}
    </div>
  );
}

function DetailsIngredients() {
  const data = JSON.parse(localStorage.foodData);
  return (
    <div>
      <div className="ingredients-title">Ingredients</div>
      {generateIngredients(data)}
    </div>
  );
}

export default DetailsIngredients;
