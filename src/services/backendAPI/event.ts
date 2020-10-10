const APIURL = 'http://160.251.5.251:8080';
export const registerUser = ({
  email,
  uid,
}: {
  email: string;
  uid: string;
}) => {
  return new Promise(resolve => {
    console.log('Register!!');

    fetch(`${APIURL}/registerUser`, {
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
      });
  });
};

export const getAllEventByAPI = (idToken: any): Promise<unknown> => {
  return new Promise(resolve => {
    fetch(`${APIURL}/getEventsByUID`, {
      method: 'GET',
      mode: 'cors',
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
};
