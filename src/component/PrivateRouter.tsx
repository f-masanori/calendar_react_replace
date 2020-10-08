import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

const PrivateRoute = ({
  component: RouteComponent,
  ...options
}: {
  [x: string]: any;
  component: any;
}) => {
  let Component: any;
  if (localStorage.getItem('uid') === '') {
    console.log('未ログイン');
    Component = Login;
  } else {
    console.log('ログイン済');
    Component = RouteComponent;
  }

  return <Route {...options} component={Component} />;
};

export default PrivateRoute;
