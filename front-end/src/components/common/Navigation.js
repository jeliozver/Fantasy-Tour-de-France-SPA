import React from 'react';
import { compose } from 'recompose';
import { NavLink } from 'react-router-dom';

import withEither from '../hoc/withEither';
import AnonymousNavigation from './AnonymousNavigation';
import AdminPanel from './AdminPanel';

const NavigationBase = (props) => {
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
        <li>
          <NavLink to="/user/team">My Fantasy Team</NavLink>
        </li>
        <li>
          <NavLink to="/user/team/manage">Manage Team</NavLink>
        </li>
        <AdminPanel isAdmin={props.isAdmin} />
        <li className="menu-item-right">
          <NavLink to="/user/logout" onClick={props.logout}><span>Hello, {props.username}</span> Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const isAuthConditionFn = (props) => props.isAuth;
const withConditionalRenderings = compose(
  withEither(isAuthConditionFn, AnonymousNavigation)
);
const Navigation = withConditionalRenderings(NavigationBase);

export default Navigation;