import { rejects } from 'assert';
import firebase from '../firebase/firebase';
import { CalendarEvent } from '../../models/redux';

export interface FetchEvents {
  Events: {
    BackgroundColor: string;
    BorderColor: string;
    Date: string;
    Event: string;
    EventID: number;
    ID: number;
    TextColor: string;
    UID: string;
  }[];
  NextEventID: number;
}

const APIURL = 'http://localhost:8080';

export const registerUser = ({
  email,
  uid,
}: {
  email: string;
  uid: string;
}) => {
  return new Promise((resolve, reject) => {
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

export const getAllEventByAPI = (): Promise<FetchEvents | any> => {
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
          .then((data: FetchEvents) => {
            resolve(data);
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
          })
          .catch(e => {
            console.log('nextEventID取得追加エラー');
            console.log(e);
            reject(e);
          });
      });
  });
};

export const postEvent = ({
  nextEventID,
  date,
  content,
}: {
  nextEventID: string;
  date: string;
  content: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
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
            EventID: String(nextEventID),
            Date: date,
            InputEvent: content,
          }),
        })
          .then(response => response.json())
          .then(data => {
            resolve(data);
            console.log(data);
          })
          .catch(e => {
            console.log('apiイベント追加エラー');
            console.log(e);
            reject(e);
          });
      });
  });
};

export const editEvent = (calendarEvent: CalendarEvent): Promise<any> => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser?.getIdToken(true)
      .then((idToken: any) => {
        fetch(`${APIURL}/event/${calendarEvent.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: idToken,
          },
          body: JSON.stringify({
            CalendarEvent: calendarEvent.title,
            BackgroundColor: calendarEvent.backgroundColor,
            BorderColor: calendarEvent.borderColor,
            TextColor: calendarEvent.textColor,
          }),
        })
          .then(response => response.json())
          .then(data => {
            resolve(data);
            console.log(data);
          })
          .catch(e => {
            console.log('apiイベント編集エラー');
            console.log(e);
            reject(e);
          });
      });
  });
};
