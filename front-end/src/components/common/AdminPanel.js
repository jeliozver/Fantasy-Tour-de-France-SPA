import React from 'react';
import { compose } from 'recompose';
import { NavLink } from 'react-router-dom';

import withMaybe from '../hoc/withMaybe';

const AdminPanelBase = () => {
  return (
    <li id="admin-panel">
      <NavLink className="plus" to="/">Admin Panel</NavLink>
      <ul className="drop-down-admin">
        <li className="drop-down-items">
          <NavLink to="/stage/add">Add Stage</NavLink>
        </li>
        <li className="drop-down-items">
          <NavLink to="/team/add">Add Team</NavLink>
        </li>
        <li className="drop-down-items">
          <NavLink to="/rider/add">Add Rider</NavLink>
        </li>
        <li className="drop-down-items">
          <NavLink to="/result/manage">Manage Result</NavLink>
        </li>
      </ul>
    </li>
  );
};

const isAdminConditionFn = (props) => props.isAdmin;
const withConditionalRenderings = compose(
  withMaybe(isAdminConditionFn)
);

const AdminPanel = withConditionalRenderings(AdminPanelBase);

export default AdminPanel;