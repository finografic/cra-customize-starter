/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { config, routes } from '_config';
import { jsx } from '@emotion/core';
import { styles } from './Breadcrumbs.css';

const Breadcrumbs = ({ match }) => {
  const appTitle = config.appName;
  const [pageTitle, setPageTitle] = useState();
  const [subTitle, setSubTitle] = useState();

  useEffect(() => {
    if (match?.params) {
      const { params } = match;
      const matchedRoute = routes.find((route) => route.path === match.path);
      matchedRoute?.title && setPageTitle(matchedRoute.title);

      switch (true) {
      case 'id' in params:
        setSubTitle(`Profile ID: ${params.id}`);
        break;
      case 'filterKey' in params:
        setSubTitle('filtered');
        break;
      case 'subtitle' in matchedRoute && matchedRoute.subtitle !== '':
        setSubTitle(matchedRoute.subtitle);
        break;
      default:
        setSubTitle('');
        break;
      }
    }
  }, [match]);

  // ===================================================== //

  const TitleApp = () => (
    <NavLink to="/" className="title-app">
      {appTitle}
    </NavLink>
  );

  const TitleView = () => (
    <React.Fragment>
      <span className="seperator"> / </span>
      {(subTitle && (
        <NavLink to="/" className="page-title">
          {pageTitle}
        </NavLink>
      )) || <span className="page-title">{pageTitle}</span>}
    </React.Fragment>
  );

  const TitleSub = () => (
    <React.Fragment>
      <span className="seperator"> / </span>
      <span to="/" className="sub-title">
        {subTitle}
      </span>
    </React.Fragment>
  );

  // ===================================================== //

  return (
    <div css={styles}>
      {appTitle && <TitleApp />}
      {pageTitle && <TitleView />}
      {subTitle && <TitleSub />}
    </div>
  );
};

Breadcrumbs.propTypes = {
  match: PropTypes.object,
  appTitle: PropTypes.string,
  pageTitle: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Breadcrumbs;
