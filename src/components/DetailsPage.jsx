import React from 'react';
import DetailsHeader from './DetailsHeader';
import DetailsIngredients from './DetailsIngredients';
import InstructionsDetails from './InstructionsDetails';

function DetailsPage() {
  return (
    <div>
      <DetailsHeader />
      <DetailsIngredients />
      <InstructionsDetails />
    </div>
  );
}

export default DetailsPage;
