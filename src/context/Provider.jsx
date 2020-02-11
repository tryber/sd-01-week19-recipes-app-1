import React, { useState } from 'react';
import PropTypes from 'prop-types';

import context from './context';

const Provider = ({ children }) => {
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState();
  const [mealsCategory, setMealsCategory] = useState();

  const storeContext = {
    disabled,
    setDisabled,
    result,
    setResult,
    mealsCategory,
    setMealsCategory,
  };

  return (
    <context.Provider value={storeContext}>{children}</context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
