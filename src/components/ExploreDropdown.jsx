import React, { useEffect }from 'react';

import { listAllAreasAPI } from '../services/foodAPI';

const ExploreDropdown = () => {

  useEffect(() => {
    listAllAreasAPI();
  }, []);
  
  return (
    <div>
      <select>

      </select>
    </div>
  );
};

export default ExploreDropdown;
