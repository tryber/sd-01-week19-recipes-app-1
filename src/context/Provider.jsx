import React, { useState } from 'react';
import PropTypes from 'prop-types';

import context from './context';

const Provider = ({ children }) => {
  const [disabled, setDisabled] = useState(true);
  const [initialResult, setInitialResult] = useState();
  const [mealsCategory, setMealsCategory] = useState();

  const storeContext = {
    disabled,
    setDisabled,
    initialResult,
    setInitialResult,
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
