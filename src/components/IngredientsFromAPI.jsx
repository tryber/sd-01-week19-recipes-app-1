import React from 'react';

const IngredientsFromAPI = ({ ingredient, currentFood }) => {
  const ingredientsArray = currentFood.includes('comidas') ? ingredient.meals : ingredient.drinks;
  return ingredientsArray.map((unity) => {
    let ingredientName = unity.strIngredient1;
    let ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`;
    if (currentFood.includes('comidas')) {
      ingredientName = unity.strIngredient;
      ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
    }
    return (
      <div>
        <div>
          <img
            alt={`${ingredientName} icon`}
            src={ingredientImage}
            data-testid={`${ingredientName}-card-img`}
          />
        </div>
        <div>
          <p>Ingredient</p>
          <p data-testid={`${ingredientName}-card-name`}>
            {ingredientName}
          </p>
        </div>
      </div >
    );
  });
}

export default IngredientsFromAPI;
