import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/context';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
import './Categories.css';

function updateAPI(category, setResult, api) {
  api(`filter.php?c=${category}`, setResult);
}

function buttonAll(setResult, api) {
  return (
    <button
      className="category-button"
      data-testid="all-category-filter"
      type="button"
      onClick={() =>
        api(`search.php?s=${generateRandomLetter()}`, setResult, true)
      }
    >
      All
    </button>
  );
}

function generateCategories(categories, setResult, api) {
  return (
    <div className="category-container">
      {buttonAll(setResult, api)}
      {categories.map((category) => {
        const { strCategory } = category;
        return (
          <button
            className="category-button"
            key={strCategory}
            data-testid={`${strCategory}-category-filter`}
            type="button"
            onClick={() => updateAPI(strCategory, setResult, api)}
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

function Categories({ pathname }) {
  const { foodCategory, setResult } = useContext(context);
  if (pathname === '/receitas/comidas') {
    return (
      <div>{generateCategories(foodCategory.meals.slice(0, 5), setResult, mealAPI)}</div>
    );
  }
  return (
    <div>{generateCategories(foodCategory.drinks.slice(0, 5), setResult, drinkAPI)}</div>
  );
}

Categories.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Categories;
