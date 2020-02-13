import React from 'react';
import Header from './Header';
import LoginForms from './LoginForms';
import LoginButton from './LoginButton';
import '../styles/LoginPage.css';

const LoginPage = () => (
  <div className="page-login">
    <Header />
    <p className="login-title">Login</p>
    <form className="form">
      <LoginForms />
      <LoginButton />
    </form>
  </div>
);


export default LoginPage;
