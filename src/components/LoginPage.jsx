import React from 'react';
import LoginForms from './LoginForms';
import LoginButton from './LoginButton';
import '../styles/LoginPage.css';

const LoginPage = () => (
  <div className="page-login">
    <p className="login-title">Login</p>
    <form className="form">
      <LoginForms />
      <LoginButton />
    </form>
  </div>
);


export default LoginPage;
