import React, { useState } from 'react';
import '../styles/DetailsButton.css';
import { useEffect } from 'react';

function DetailsButton({ id }) {
  const [text, setText] = useState('');
  useEffect(() => {
    const doneRecipes = localStorage.getItem('done-recipes');
    if (JSON.parse(doneRecipes).find((recipe) => recipe.id === id)) {
      return setText('');
    }
    const progressRecipes = localStorage.getItem('in-progress');
    if (JSON.parse(progressRecipes).find((recipe) => recipe === id)) {
      return setText('Continuar receita');
    }
    return setText('Iniciar Receita');
  }, []);
  if (text === '') return <div></div>;
  return <button className="details-button">{text}</button>;
}

export default DetailsButton;
