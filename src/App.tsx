/* eslint-disable react/jsx-key, react/jsx-props-no-spreading, jsx-a11y/alt-text */
import React, { Component, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router';
import { ConbineState } from './reducer/index';
import Login from './component/pages/Login';
import SignUp from './component/pages/SignUp';

import Home from './component/pages/Home';
import { LoadingScreen } from './component/pages/Loading';
import Calendar from './component/pages/Calendar';
import 'semantic-ui-css/semantic.min.css';
import firebase from './services/firebase/firebase';
import PrivateRoute from './component/PrivateRouter';
import { confirmLogind } from './actionCreaters/authentication';
import Header from './component/organisms/Header';

const App = () => {
  const loginUserState = useSelector((state: ConbineState) => state.loginUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('loginUserState');

  //   if (loginUserState.uid === '') {
  //     console.log(loginUserState);
  //     console.log('loginUserState');
  //     dispatch(confirmLogind.start(1));
  //   }
  // }, []);

  return (
    <>
      <Router>
        <Header />
        <LoadingScreen />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <PrivateRoute
            exact
            path="/calendar"
            component={Calendar}
            uid={loginUserState.uid}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
