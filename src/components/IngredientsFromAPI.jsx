import React from 'react';



const IngredientsFromAPI = ({ ingredients, pathname, index }) => {
  ingredients.map((ingredient) => {
    if (pathname.includes('comidas')) {
      const ingredientName = ingredient.strIngredient;
      const ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
      return (
        <div>
          <div>
            <img
              src={ingredientImage}
              data-testid={`${ingredientName}-card-img`}
            />
            <p>Ingredient</p>
            <p>{ingredientName}</p>
          </div>
        </div>
      );
    }
  }
}

export default IngredientsFromAPI;
