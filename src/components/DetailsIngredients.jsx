import React from 'react';

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
    <div>
      {array.map((ingredient) => (
        <p>{ingredient}</p>
      ))}
    </div>
  );
}

function DetailsIngredients() {
  const data = JSON.parse(localStorage.foodData);
  return <div>{generateIngredients(data)}</div>;
}

export default DetailsIngredients;
