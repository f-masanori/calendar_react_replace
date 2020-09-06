import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
};

// https://firebase.google.com/docs/auth/web/start
// see: GitHub認証の統合 https://firebase.google.com/docs/auth/web/github-auth?hl=ja
const githubProvider = new firebase.auth.GithubAuthProvider();

const FirebaseFactory = () => {
  firebase.initializeApp(firebaseConfig);
  let auth = firebase.auth();
  return {
    auth() {
      return auth;
    },

    login() {
      return auth.signInWithPopup(githubProvider);
    },

    logout() {
      return auth.signOut();
    }
  };
};

export default FirebaseFactory();
