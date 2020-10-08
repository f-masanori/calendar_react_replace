import firebase from '../firebase';

const db = firebase.firestore();

export const addEvent = () => {
  return new Promise(resolve => {
    db.collection('Events')
      .add({
        name: 'hoge',
        age: 27,
      })
      .then(doc => {
        console.log(`追加に成功しました (${doc.id})`);
        resolve(doc);
      })
      .catch(error => {
        console.log(`追加に失敗しました (${error})`);
      });
  });
};
// firestoreからデータをとってくるサンプル
export const getEvent = () => {
  return new Promise(resolve => {
    db.collection('Events')
      .get()
      .then(querySnapshot => {
        console.log(`追加に成功しました (${querySnapshot})`);
        console.log(querySnapshot.size);
        console.log(querySnapshot.empty);
        console.log(querySnapshot.docs.map(postDoc => postDoc.id));
        querySnapshot.forEach(postDoc => {
          console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()));
        });
        resolve(querySnapshot);
      });
  });
};
