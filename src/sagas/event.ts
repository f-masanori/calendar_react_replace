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
  isLogin,
  firebaseDeleteCurrentUser,
} from '../services/firebase/authentication/authentication';
import { registerUser, getAllEventByAPI } from '../services/backendAPI/event';
import { getAllEvent } from '../actionCreaters/event';

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
