import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

function Meal({ data }) {
  return (
    <Link to={`/receitas/comidas/${data.idMeal}`} className='meal-container'>
      <div>
        <img src={data.strMealThumb} />
        <p className='meal-category'>{data.strCategory}</p>
        <p className='meal-name'>{data.strMeal}</p>
      </div>
    </Link>
  );
}

export default Meal;
