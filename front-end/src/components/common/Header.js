import React from 'react';

import '../../resources/style/Header.css';
import Navigation from './Navigation';
import AuthService from '../../utilities/AuthService';

const Auth = new AuthService();

const Header = () => {
  const user = Auth.getProfile() || '';

  return (
    <header>
      <Navigation
        isAuth={Auth.isLoggedIn()}
        isAdmin={user.isAdmin}
        username={user.username}
        logout={Auth.logout}
      />
    </header>
  );
};

export default Header;