import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavItem = ({ exact, ...props }) => {
  return (
    <NavLink exact={exact} to={props.path} className="button" activeClassName="selected">
      {props.title}
    </NavLink>
  );
};

NavItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default NavItem;
