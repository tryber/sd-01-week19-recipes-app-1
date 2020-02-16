import React from 'react';

const IngredientsFromAPI = ({ ingredient, currentFood }) => {
  return ingredient.meals.map((unity) => {
    let ingredientName = unity.strIngredient1;
    let ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`;
    if (currentFood === 'Comidas') {
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
