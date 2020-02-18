import React, { useEffect } from 'react';

  import { filterAreAPI } from '../services/foodAPI';
import '../styles/ExploreOriginDropdown.css';

const ExploreOriginDropdown = () => {
  const localStorageArea = JSON.parse(localStorage.area);

  useEffect(() => {
  }, [localStorage.filterFood]);

  return (
    <select
      className="Explore_Dropdown_select"
      data-testid="explore-by-area-dropdown"
      onClick={e => {
        filterAreAPI(e.target.value);
      }}
    >
      <option data-testid="All" value="list">
        All
      </option>
      {localStorageArea.map(country => (
        <option
          data-testid={`${country.strArea}-option`}
          key={country.strArea}
          value={country.strArea}
        >
          {country.strArea}
        </option>
      ))}
    </select>
  );
};

export default ExploreOriginDropdown;
