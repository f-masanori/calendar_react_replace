import { call, put, takeEvery } from 'redux-saga/effects';
import {
  confirmLogind,
  login,
  signUp,
  signOut,
} from '../actionCreaters/authentication';
import {
  firebaseLogin,
  firebaseSignUp,
  firebaseSignOut,
  isFBLogined,
  firebaseDeleteCurrentUser,
} from '../services/firebase/authentication/authentication';
import { registerUser, getAllEventByAPI } from '../services/backendAPI/event';
import { getAllEvent } from '../actionCreaters/event';

export function* runLogin(action: ReturnType<typeof login.start>) {
  const { email, password } = action.payload;
  try {
    console.log('runLogin');
    const fUser: firebase.User = yield call(firebaseLogin, {
      email,
      password,
    });
    yield put(login.succeed({ uid: fUser.uid }));
  } catch (error) {
    console.error(error);
    yield put(login.fail({ err: 1 }, error));
  }
}

export function* runSignUp(action: ReturnType<typeof signUp.start>) {
  const { email, password } = action.payload;
  try {
    console.log('runSignUp');
    const fUser: firebase.User = yield call(firebaseSignUp, {
      email,
      password,
    });
    yield call(registerUser, {
      email,
      uid: fUser.uid,
    });
    yield put(signUp.succeed({ uid: fUser.uid }));
  } catch (error) {
    console.error(error);
    alert('signup エラー');
    window.location.reload();
    yield call(firebaseDeleteCurrentUser);
    yield put(signUp.fail({ err: 1 }, error));
  }
}

export function* runSignOut(action: ReturnType<typeof signUp.start>) {
  try {
    console.log('runSignOut');
    yield call(firebaseSignOut);
    yield put(signOut.succeed());
    window.location.reload();
  } catch (error) {
    console.error(error);
    yield put(signOut.fail(error));
  }
}

export function* runConfirmLogind(
  action: ReturnType<typeof confirmLogind.start>,
) {
  console.log(action);
  try {
    console.log('isFBLogined');
    const currentUser: firebase.User | null = yield call(isFBLogined);
    console.log(currentUser);

    const uid = currentUser ? currentUser.uid : '';
    console.log(uid);

    yield put(confirmLogind.succeed({ uid }));
  } catch (error) {
    yield put(confirmLogind.fail({ err: 1 }, error));
  }
}
