import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login';
import { ConbineState } from '../reducer/index';
import {
  confirmLogind,
  setLoginUserState,
} from '../actionCreaters/authentication';
import { isFBLogined } from '../services/firebase/authentication/authentication';
import firebase from '../services/firebase/firebase';

const PrivateRoute = ({
  component: RouteComponent,
  ...options
}: {
  [x: string]: any;
  component: any;
}) => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const loginUserState = useSelector((state: ConbineState) => state.loginUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('call onAuthStateChanged');
      if (user) {
        console.log(user);
        // dispatch(setLoginUserState.succeed({ uid: user.uid }));
        setIsLogined(true);
      } else {
        console.log('not logined');

        setIsLogined(false);
      }
      setAuthChecked(true);
    });
  }, []);

  return authChecked ? (
    <Route {...options} component={isLogined ? RouteComponent : Login} />
  ) : (
    <div>loading</div>
  );
};

export default PrivateRoute;
