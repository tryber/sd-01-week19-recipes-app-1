import React, { useContext } from 'react';
import context from '../context/context';

const LoginButton = () => {
  const { disabled, userEmail } = useContext(context);

  const submition = () => {
    localStorage.setItem('meals-token', '1');
    localStorage.setItem('cocktails-token', '1');
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
  };

  return (
    <button
      type="button"
      className="access-button"
      onClick={submition}
      disabled={disabled}
      data-testid="login-submit-btn"
    >
      Entrar
    </button>
  );
};

export default LoginButton;
