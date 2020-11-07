/* eslint-disable react/jsx-key, react/jsx-props-no-spreading, jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router';
import { ConbineState } from './reducer/index';
import Login from './component/pages/Login';
import SignUp from './component/pages/SignUp';

import Home from './component/pages/Home';
import { LoadingScreen } from './component/organisms/Loading';
import Calendar from './component/pages/Calendar';
import 'semantic-ui-css/semantic.min.css';
import firebase from './services/firebase/firebase';
import PrivateRoute from './component/PrivateRouter';
import { setLoginUserState } from './actionCreaters/authentication';
import Header from './component/organisms/Header';

const App = () => {
  const loginUserState = useSelector((state: ConbineState) => state.loginUser);
  const dispatch = useDispatch();
  const [isVerified, setIsVerified] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const { uid } = loginUserState;
  const [email, setEmail] = useState<any>('');

  useEffect(() => {
    console.log('priveate router useeffect');
    if (uid === '') {
      firebase.auth().onAuthStateChanged(User => {
        console.log('call onAuthStateChanged');
        if (User) {
          console.log('logined');
          setEmail(User.email);
          dispatch(
            setLoginUserState.succeed({
              uid: User.uid,
            }),
          );
        } else {
          console.log('not logined');
          dispatch(
            setLoginUserState.succeed({
              uid: 'noUser',
            }),
          );
        }
        setIsLogined(false);
      });
    }
  }, []);

  return (
    <>
      <Header uid={uid} email={email} />
      {isLogined && <LoadingScreen />}
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
    </>
  );
};

export default App;
