 
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

const Provider = ({ children }) => {
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState();
  const [email, setEmail] = useState();
  const [foodCategory, setFoodCategory] = useState();
  const [currentFood, setCurrentFood] = useState('Comidas');
  const [category, setCategory] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [isShowInput, setIsShowInput] = useState(false);
  const [empty, setEmpty] = useState();
  const [hiddenIcon, setHiddenIcon] = useState('');

  const storeContext = {
    disabled, setDisabled,
    result, setResult,
    foodCategory, setFoodCategory,
    currentFood, setCurrentFood,
    category, setCategory,
    searchInput, setSearchInput,
    isShowInput, setIsShowInput,
    email, setEmail,
    setEmpty, empty,
    hiddenIcon, setHiddenIcon,
  };

  return <context.Provider value={storeContext}>{children}</context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
