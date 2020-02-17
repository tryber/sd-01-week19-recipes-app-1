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
        <option value="list">All</option>
        {localStorageArea.map(country => (
          <option key={country.strArea} value={country.strArea}>
            {country.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExploreDropdown;
