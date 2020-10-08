import { resolve } from 'path';
import firebase from '../firebase';

export const returnPromise = (id: any) => {
  return new Promise((resolve, reject) => {
    console.log(id);
    setTimeout(() => {
      resolve('SUCCESS');
    }, 1000);
  });
};

export const firebaseSignUp = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return new Promise((resolve, reject) => {
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user?.uid);
        resolve(res.user?.uid);
      })
      .catch(error => {
        alert(error);
        reject(error);
      });
  });
};

export const firebaseLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return new Promise((resolve, reject) => {
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user?.uid);
        resolve(res.user?.uid);
      })
      .catch(error => {
        alert(error);
      });
  });
};

export const signOut = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        alert(error);
      });
  });
};

export const isLogin = () => {
  return new Promise(resolve => {
    const user: firebase.User | null = firebase.auth().currentUser;

    if (user) {
      resolve(user);
    } else {
      resolve(null);
    }
  });
};
