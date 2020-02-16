import React from 'react';

const IngredientsFromAPI = ({ ingredients, pathname }) => {
  ingredients.map((ingredient) => {
    const ingredientName = ingredient.strIngredient1;
    const ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`;
    if (pathname.includes('comidas')) {
      const ingredientName = ingredient.strIngredient;
      const ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
    }
    return (
      <div>
        <div>
          <img
            src={ingredientImage}
            data-testid={`${ingredientName}-card-img`}
          />
          <div>
            <p>Ingredient</p>
            <p>{ingredientName}</p>
          </div>
        </div>
      </div>
    );
  });
}

export default IngredientsFromAPI;
