import React, { useState } from 'react';
import '../styles/IngredientToDo.css';

function IngredientToDo({ ingredient }) {
  const [isMarked, setIsMarked] = useState(false);
  return (
    <div class="ingredient-container">
      <input
        type="checkbox"
        className="ingredient-button"
        onClick={() => setIsMarked(!isMarked)}
      />
      <p
        key={ingredient}
        className={isMarked ? 'marked-ingredient' : 'unmarked-ingredient'}
      >
        {ingredient}
      </p>
    </div>
  );
}

export default IngredientToDo;
