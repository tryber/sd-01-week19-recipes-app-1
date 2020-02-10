import React, { useContext } from 'react';
import context from '../context/context';

const LoginForms = () => {
  const { setUserEmail, setUserPassword } = useContext(context);

  return (
    <div className="form">
      <input
        type="email"
        placeholder="Email"
        className="input-email"
        onChange={(event) => setUserEmail(event.target.value)}
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Senha"
        minLength="6"
        className="input-password"
        onChange={(event) => setUserPassword(event.target.value)}
        data-testid="password-input"
      />
    </div>
  );
};

export default LoginForms;
