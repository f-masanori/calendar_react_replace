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
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .then(res => resolve(res.user?.uid))
      .catch(function(error) {
        alert(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(res => {
    //     console.log(res.user?.uid);
    //     resolve(res.user?.uid);
    //   })
    //   .catch(error => {
    //     alert(error);
    //   });
  });
};
export const firebaseDeleteCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const user = firebase.auth().currentUser;
    if (user) {
      user
        .delete()
        .then(() => {
          console.warn('fail singup process and firebase`s user deleted');
          resolve('success');
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    }
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
    console.log(user);
    if (user) {
      resolve(user);
    } else {
      resolve(null);
    }
  });
};
