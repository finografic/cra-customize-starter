/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { routes } from '_config';
import { Col, Row } from 'react-styled-flexboxgrid';
import Breadcrumbs from 'components/Breadcrumbs';
import { jsx } from '@emotion/core';
import { styles } from './Header.css';

const Header = ({ match }) => {
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    if (match) {
      const matchedRoute = routes.find((route) => route.path === match.path);
      matchedRoute?.title && setPageTitle(matchedRoute.title);
    }
  }, [match]);

  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header className="header" css={styles}>
        <Row middle="xs">
          <Col xs={12} sm={10} className="header-left">
            <h1>
              <Breadcrumbs match={match} />
            </h1>
          </Col>
          <Col xs={12} sm={2} className="header-right">
            {/* optional content */}
          </Col>
        </Row>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Header;
