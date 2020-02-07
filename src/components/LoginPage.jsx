import React from 'react';
import LoginSenha from './LoginPassword';
import LoginEmail from './LoginEmail';
import LoginButton from './LoginButton';
import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="page-login">
      <p className="login-title">Login</p>
      <form className="form">
        <LoginEmail />
        <LoginSenha />
        <LoginButton />
      </form>
    </div>
  )
}

export default LoginPage;
