/** @jsx jsx */
import { NavItem } from './NavItem';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { styles } from './Nav.css';

export const Nav = ({ routes }) => {
  return (
    <nav css={styles}>
      <ol>
        {routes.map(
          (route) =>
            route.isNav && (
              <li key={route.title}>
                <NavItem {...route} />
              </li>
            ),
        )}
      </ol>
    </nav>
  );
};

Nav.propTypes = {
  routes: PropTypes.array,
};
