import React from 'react';

const IngredientsFromAPI = ({ ingredients, pathname }) => {
  ingredients.map((ingredient) => {
    const ingredientName = ingredient.strIngredient1;
    let ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`;
    if (pathname.includes('comidas')) {
      const ingredientName = ingredient.strIngredient;
      ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
    }
    return (
      <div>
        <div>
          <img
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
