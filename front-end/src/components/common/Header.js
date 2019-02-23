import React from 'react';

import '../../resources/style/Header.css';
import Navigation from './Navigation';

const Header = (props) => {
  const { Auth, Helper } = props;
  const user = props.Auth.getProfile() || '';

  return (
    <header>
      <Navigation
        isAuth={Auth.isLoggedIn()}
        isAdmin={user.isAdmin}
        username={user.username}
        logout={Auth.logout}
        helper={Helper}
      />
    </header>
  );
};

export default Header;