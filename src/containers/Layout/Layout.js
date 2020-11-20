import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useStore } from 'store';
import { useRouter } from 'utils/useRouter';

// LAYOUT
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import ScrollToTop from 'components/ScrollToTop';

import { Loading } from 'components/Loading';
import { routes } from '_config';
const NotFound = React.lazy(() => import('containers/NotFound'));

const Layout = () => {
  const { match } = useRouter();
  const { pathname } = useLocation();
  const { state, dispatch } = useStore();

  useEffect(() => {
    dispatch({ type: 'SET_ROUTER_MATCH', match });
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Sidebar />
      <main>
        <Header match={state.match} />
        <React.Suspense fallback={Loading(state.isLoading)}>
          <Switch>
            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            {routes.map((route, index) => {
              return (
                <Route
                  exact={route.exact}
                  strict={route.strict}
                  path={route.path}
                  render={(props) => <route.component {...props} {...route} />}
                  key={index}
                />
              );
            })}
            <Redirect from="/" to="/dashboard" />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
