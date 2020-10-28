import React from 'react';
import { Helmet } from 'react-helmet-async';
import { config } from '_config';
import Layout from 'containers/Layout';
import { Global } from '@emotion/core';
import { cssGlobal } from 'styles/global';

export default function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate={`%s - ${config.appName}`} defaultTitle={`${config.appName}`} />
      <Layout />
      <Global styles={cssGlobal} />
    </React.Fragment>
  );
}
