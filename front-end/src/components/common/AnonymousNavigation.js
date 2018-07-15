import React from 'react';
import { NavLink } from 'react-router-dom';

const AnonymousNavigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/howto">How To Play</NavLink>
        </li>
        <li>
          <NavLink to="/stage/all">Stages</NavLink>
        </li>
        <li>
          <NavLink to="/team/all">Teams</NavLink>
        </li>
        <li className="menu-item-right">
          <NavLink to="/user/register">Register</NavLink>
        </li>
        <li className="menu-item-right">
          <NavLink to="/user/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AnonymousNavigation;