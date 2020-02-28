import React, { useEffect, useState } from 'react';
import DetailsHeader from './DetailsHeader';
import DetailsInstructions from './DetailsInstructions';
import IngredientToDo from './IngredientToDo';
import findData from '../services/findData';
import '../styles/IngredientToDo.css';

function ingredientsToDo(data) {
  let index = 1;
  const array = [];
  while (data[`strIngredient${index}`]) {
    array.push(
      ` ${data[`strIngredient${index}`]} - ${data[`strMeasure${index}`]}`,
    );
    index += 1;
  }
  return (
    <div>
      Ingredients
      <div className="ingredients-container ">
        {array.map((ingredient) => (
          <IngredientToDo ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}

function ProgressPage() {
  const [currentData, setCurrentData] = useState('');
  useEffect(() => {
    const data = JSON.parse(localStorage.foodData);
    const newData = findData(data);
    setCurrentData(newData);
    const inProgress = JSON.parse(localStorage.getItem('in-progress'));
    localStorage.setItem(
      'in-progress',
      JSON.stringify([...inProgress, newData.idMeal || newData.idDrink]),
    );
  }, []);
  if (currentData === '') return <div>Loading...</div>;
  return (
    <div>
      <DetailsHeader />
      {ingredientsToDo(currentData)}
      <DetailsInstructions />
    </div>
  );
}

export default ProgressPage;
