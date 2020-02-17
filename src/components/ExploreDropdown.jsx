import React, { useEffect }from 'react';

import { listAllAreasAPI } from '../services/foodAPI';

const ExploreDropdown = () => {
  const localStorageArea = JSON.parse(localStorage.area);

  useEffect(() => {
    listAllAreasAPI();
  }, []);
  
  return (
    <div>
      <select>
        {localStorageArea.map((country) => <option>{country.strArea}</option>)}
      </select>
    </div>
  );
};

export default ExploreDropdown;
