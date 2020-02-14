import React from 'react';
import '../styles/InstructionsDetails.css';

function InstructionsDetails() {
  const data = JSON.parse(localStorage.foodData);

  return (
    <div>
      <p className="instructions-title">Instructions</p>
      <div className="instructions-details">{data.strInstructions}</div>
    </div>
  );
}

export default InstructionsDetails;
