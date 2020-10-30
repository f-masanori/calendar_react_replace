import { rejects } from 'assert';
import firebase from '../firebase/firebase';

const APIURL = 'http://localhost:8080';
export const registerUser = ({
  email,
  uid,
}: {
  email: string;
  uid: string;
}) => {
  return new Promise((resolve, reject) => {
    console.log(uid, email);
    fetch(`${APIURL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UID: uid,
        Email: email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(e => {
        console.log('api　エラー');
        reject(e);
      });
  });
};

export const getAllEventByAPI = (): Promise<unknown> => {
  return new Promise(resolve => {
    firebase
      .auth()
      .currentUser?.getIdToken(true)
      .then((idToken: any) => {
        fetch(`${APIURL}/event`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: idToken,
          },
        })
          .then(response => response.json())
          .then(data => {
            resolve(data);
            console.log(data);
          });
      });
  });
};

export const getNextEventID = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser?.getIdToken(true)
      .then((idToken: any) => {
        fetch(`${APIURL}/event/nextID`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: idToken,
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            resolve(data);
          });
      });
  });
};

export const postEvent = (_nextEventID: number): Promise<unknown> => {
  return new Promise(resolve => {
    firebase
      .auth()
      .currentUser?.getIdToken(true)
      .then((idToken: any) => {
        fetch(`${APIURL}/event`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: idToken,
          },
          body: JSON.stringify({
            EventID: String(_nextEventID),
            Date: '20201010',
            InputEvent: 'input',
          }),
        })
          .then(response => response.json())
          .then(data => {
            resolve(data);
            console.log(data);
          });
      });
  });
};
