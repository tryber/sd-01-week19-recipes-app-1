import React from 'react';
import { Link } from 'react-router-dom';
import ProfileLogout from './ProfileLogout';

import '../styles/ProfilePage.css';


const ProfilePage = () => {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="every-elements">
      <p data-testid="profile-email">{userEmail.email}</p>
      <Link to="/receitas-feitas">
        <button className="button" data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button className="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      </Link>
      <ProfileLogout />
    </div>
  );
};

export default ProfilePage;
