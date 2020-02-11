import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import context from './context';

const Provider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (userPassword.length >= 6 && emailRegex.test(userEmail)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userEmail, userPassword]);

  const storeContext = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    disabled,
    setDisabled,
  };

  return (
    <context.Provider value={storeContext}>{children}</context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
