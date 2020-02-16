import React from 'react';

const IngredientsFromAPI = ({ ingredient, currentFood }) => {
  return ingredient.meals.map((unity) => {
    let ingredientName = 'strIngredient1';
    console.log(ingredientName);
    let ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`;
    if (currentFood.includes('comidas')) {
      ingredientName = 'strIngredient';
      ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
    }
    return (
      <div>
        <div>
          <img
            alt={`${unity.ingredientName} icon`}
            src={ingredientImage}
            data-testid={`${unity.ingredientName}-card-img`}
          />
        </div>
        <div>
          <p>Ingredient</p>
          <p data-testid={`${unity.ingredientName}-card-name`}>
            {unity.ingredientName}
          </p>
        </div>
      </div >
    );
  });
}

export default IngredientsFromAPI;
