import React from 'react';

import '../../resources/style/Header.css';
import Navigation from './Navigation';

const Header = (props) => {
  const user = props.Auth.getProfile() || '';

  return (
    <header>
      <Navigation
        isAuth={props.Auth.isLoggedIn()}
        isAdmin={user.isAdmin}
        username={user.username}
        logout={props.Auth.logout}
      />
    </header>
  );
};

export default Header;