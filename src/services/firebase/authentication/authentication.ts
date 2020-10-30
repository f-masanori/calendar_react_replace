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
  return new Promise<string>((resolve, reject) => {
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
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
  return new Promise<string | any>((resolve, reject) => {
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => resolve(res.user?.uid))
      .catch(error => {
        alert(error);
        reject(error);
      });
  });
};
export const firebaseDeleteCurrentUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
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
  });
};
export const firebaseSignOut = () => {
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

export const isFBLogined = () => {
  return new Promise<firebase.User | null>(resolve => {
    const user: firebase.User | null = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      resolve(user);
    } else {
      resolve(null);
    }
  });
};
