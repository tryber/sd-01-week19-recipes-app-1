import React, { useContext } from 'react';
import context from '../context/context';
import { mealAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
import './Categories.css';

function updateAPI(category, setResult) {
  mealAPI(`filter.php?c=${category}`, setResult);  
}

function buttonAll(setResult) {
  return (
    <button
      className="category-button"
      data-testid="all-category-filter"
      type="button"
      onClick={() =>
        mealAPI(`search.php?s=${generateRandomLetter()}`, setResult, true)
      }
    >
      All
    </button>
  );
}

function generateCategories(categories, setResult) {
  return (
    <div className="category-container">
      {buttonAll(setResult)}
      {categories.map((category) => {
        const { strCategory } = category;
        return (
          <button
            className="category-button"
            key={strCategory}
            data-testid={`${strCategory}-category-filter`}
            type="button"
            onClick={() => updateAPI(strCategory, setResult)}
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

function Categories() {
  const { mealsCategory, setResult, result } = useContext(context);
  return (
    <div>{generateCategories(mealsCategory.meals.slice(0, 5), setResult,)}</div>
  );
}

export default Categories;
