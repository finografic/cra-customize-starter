import React from 'react';
import { Helmet } from 'react-helmet-async';
import { config } from '_config';
import Layout from 'containers/Layout';
import { Global } from '@emotion/core';
import { cssGlobal } from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';

export default function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate={`%s - ${config.pageTitleSuffix}`} defaultTitle={`${config.appName}`} />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
      <Global styles={cssGlobal} />
    </React.Fragment>
  );
}
