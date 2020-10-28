import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStore } from 'store';

// LAYOUT

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

import { Loading } from 'components/Loading';
import { routes } from '_config';
const NotFound = React.lazy(() => import('containers/NotFound'));

const Layout = () => {
  const { state } = useStore();

  return (
    <React.Fragment>
      <Sidebar />
      <main>
        <Header />
        <React.Suspense fallback={Loading(state.isLoading)}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact={route.exact}
                strict={route.strict}
                path={route.path}
                render={(props) => <route.component {...props} {...route} />}
                key={index}
              />
            ))}
            {/* <Redirect from="/" to="/" />*/}
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
