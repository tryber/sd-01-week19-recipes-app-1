import React, { useState } from 'react';
import PropTypes from 'prop-types';

import context from './context';

const Provider = ({ children }) => {
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState();
  const [foodCategory, setFoodCategory] = useState();
  const [currentFood, setCurrentFood] = useState('Comidas');
  const [searchInput, setSearchInput] = useState('');
 

  useEffect(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (userPassword.length >= 6 && emailRegex.test(userEmail)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userEmail, userPassword]);
  const storeContext = {
    disabled,
    setDisabled,
    result,
    setResult,
    foodCategory,
    setFoodCategory,
    currentFood,
    setCurrentFood,
    searchInput,
    setSearchInput,
  };

  return <context.Provider value={storeContext}>{children}</context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
