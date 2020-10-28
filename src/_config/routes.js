import React from 'react';
import { Loading } from 'components/Loading';
import baseLoadable from '@loadable/component';

const loadable = (func) => baseLoadable(func, { fallback: <Loading /> });
const HomePage = loadable(() => import('containers/HomePage'));
const Dashboard = loadable(() => import('containers/Dashboard'));

export const routes = [
  {
    path: '/',
    exact: true,
    strict: true,
    component: HomePage,
    title: 'Homepage',
    subtitle: 'Homepage component',
    isNav: true,
  },
  {
    path: '/dashboard',
    exact: true,
    strict: false,
    component: Dashboard,
    title: 'Dashboard',
    subtitle: 'Dashboard component',
    isNav: true,
  },
];
