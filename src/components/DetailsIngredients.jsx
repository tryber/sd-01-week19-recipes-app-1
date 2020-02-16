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
        <p className="ingredient">{ingredient}</p>
      ))}
    </div>
  );
}

function DetailsIngredients() {
  let data = JSON.parse(localStorage.foodData);
  if (data.meals || data.idMeal) {
    data = data.meals ? data.meals[0] : data;
  } else {
    data = data.drinks ? data.drinks[0] : data;
  }
  return (
    <div>
      <div className="ingredients-title">Ingredients</div>
      {generateIngredients(data)}
    </div>
  );
}

export default DetailsIngredients;
