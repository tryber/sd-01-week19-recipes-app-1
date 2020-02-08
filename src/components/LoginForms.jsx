import React, { useState } from 'react';

const LoginForms = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  buttonStartApp = () => {
    if (userPassword.length >= 6 && userEmail !== '') {
      setDisabled(!disabled);
    }
  }

  return (
    <div>
      <input 
        type="email" 
        placeholder="Email" 
        className="input-email" 
        onChange={(event) => setUserEmail(event.target.value)}
      />
      <input 
        type="password" 
        placeholder="Senha" 
        minLength="6" 
        className="input-password"
        onChange={(event) => setUserPassword(event.target.value)}
      />
    </div>
  );
}


export default LoginForms;
