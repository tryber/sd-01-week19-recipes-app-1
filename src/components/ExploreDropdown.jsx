import React from 'react';

import { listAllAreasAPI } from '../services/foodAPI';

const ExploreDropdown = () => {
  listAllAreasAPI()
  return (
    <div>
      <select>

      </select>
    </div>
  );
};

export default ExploreDropdown;
