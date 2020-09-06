import { useState, useEffect } from 'react';
// import firebase from "../firebase";
// import { route } from "preact-router";

export const useUser = (): {
  user: null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
} => {
  const [user, setUser] = useState(null);
  useEffect(async (): any => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  const login = async () => {
    const credential = await firebase.login();
    setUser(credential.user);
  };

  const logout = async () => {
    await firebase.logout();
    setUser(null);
    route('/');
  };

  return { user, login, logout };
};
