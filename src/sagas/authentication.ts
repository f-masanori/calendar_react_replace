import { call, put, takeEvery } from 'redux-saga/effects';
import { confirmLogind, login, signUp } from '../actionCreaters/authentication';
import {
  firebaseLogin,
  firebaseSignUp,
  isLogin,
  firebaseDeleteCurrentUser,
} from '../services/firebase/authentication/authentication';
import { registerUser, getAllEventByAPI } from '../services/backendAPI/event';
import { getAllEvent } from '../actionCreaters/event';

export function* runLogin(action: ReturnType<typeof login.start>) {
  const { email, password } = action.payload;
  try {
    console.log('runLogin');
    const resultData = yield call(firebaseLogin, { email, password });
    const resultData2 = yield call(registerUser, {
      email,
      uid: resultData.uid,
    });

    yield put(login.succeed(resultData));
  } catch (error) {
    console.error(error);
    yield put(login.fail({ err: 1 }, error));
  }
}

export function* runSignUp(action: ReturnType<typeof signUp.start>) {
  const { email, password } = action.payload;
  try {
    console.log('runSignUp');
    const resultData = yield call(firebaseSignUp, { email, password });
    const resultData2 = yield call(registerUser, {
      email,
      uid: resultData.uid,
    });

    yield put(login.succeed(resultData));
  } catch (error) {
    console.error(error);
    firebaseDeleteCurrentUser();

    yield put(login.fail({ err: 1 }, error));
  }
}

export function* runConfirmLogind(
  action: ReturnType<typeof confirmLogind.start>,
) {
  console.log(action);
  try {
    console.log('isLogin');
    const currentUser: firebase.User | null = yield call(isLogin);
    const uid = currentUser ? currentUser.uid : '';
    console.log(uid);

    yield put(confirmLogind.succeed({ uid }));
  } catch (error) {
    yield put(confirmLogind.fail({ err: 1 }, error));
  }
}

export function* runGetAllEvent(action: ReturnType<typeof getAllEvent.start>) {
  console.log(action);
  try {
    console.log('getevetn');
    const data = yield call(getAllEventByAPI, action.payload.uid);
    console.log(data);

    // yield put(getAllEvent.succeed({ "uid" }));
  } catch (error) {
    yield put(getAllEvent.fail({ err: 1 }, error));
  }
}
