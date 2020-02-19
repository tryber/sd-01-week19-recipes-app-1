import React, { useContext } from 'react';

import { filterAreAPI } from '../services/foodAPI';
import context from '../context/context';
import '../styles/ExploreOriginDropdown.css';

const ExploreOriginDropdown = () => {
  const { setFilterFood, countries } = useContext(context);

  if (!countries) {
    return <div>Loading...</div>;
  }

  return (
    <select
      className="Explore_Dropdown_select"
      data-testid="explore-by-area-dropdown"
      onClick={(e) => {
        filterAreAPI(e.target.value, setFilterFood);
      }}
    >
      {/* <option data-testid="All" value="list">
        All
      </option> */}
      {countries.meals.map((country) => (
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
