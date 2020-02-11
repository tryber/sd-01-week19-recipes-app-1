import React, { useContext } from 'react';
import context from '../context/context';
import { mealAPI } from '../services/foodAPI';

function updateAPI(category, setResult) {
  mealAPI(`filter.php?c=${category}`, setResult);
}

function generateCategories(categories, setResult) {
  return (
    <div>
      {categories.map((category) => {
        const { strCategory } = category;
        return (
          <button
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
  const { mealsCategory, setResult } = useContext(context);
  return <div>{generateCategories(mealsCategory.meals.slice(0, 5), setResult)}</div>;
}

export default Categories;
