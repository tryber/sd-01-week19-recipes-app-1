import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';
import '../styles/Food.css';
import { useContext } from 'react';
import context from '../context/context';

function generateFoodsList(result, pathname) {
  if (!result) {
    return <div>Nenhuma receita encontrada</div>;
  }
  return result.map((food, index) => (
    <Food
      index={index}
      pathname={pathname}
      key={`${food.strSource} ${index * 3}`}
      data={food}
    />
  ));
}

function FoodList({ result, pathname = '' }) {
  const { recommendeds } = useContext(context);
  let newResult = result ? result : recommendeds;
  if (result.meals) {
    return (
      <div className={pathname === '' ? 'food-recommendeds' : 'food-list'}>
        {generateFoodsList(newResult.meals, pathname)}
      </div>
    );
  }
  return (
    <div className={pathname === '' ? 'food-recommendeds' : 'food-list'}>
      {generateFoodsList(newResult.drinks, pathname)}
    </div>
  );
}

FoodList.propTypes = {
  pathname: PropTypes.string.isRequired,
  result: PropTypes.shape({
    meals: PropTypes.string.isRequired,
  }).isRequired,
};
export default FoodList;
