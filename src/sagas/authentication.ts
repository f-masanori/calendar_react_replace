import { call, put, takeEvery } from 'redux-saga/effects';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { confirmLogind, login } from '../actionCreaters/authentication';
import {
  firebaseLogin,
  firebaseSignUp,
  isLogin,
} from '../services/firebase/authentication/authentication';

export function* runLogin(action: ReturnType<typeof login.start>) {
  const { email, password } = action.payload;
  try {
    console.log('sagas');
    const resultData = yield call(firebaseSignUp, { email, password });
    yield put(login.succeed(resultData));
  } catch (error) {
    yield put(login.fail({ err: 1 }, error));
  }
}

export function* runConfirmLogind(
  action: ReturnType<typeof confirmLogind.start>,
) {
  try {
    console.log('isLogin');
    const currentUser: firebase.User | null = yield call(isLogin);
    const uid = currentUser ? currentUser.uid : '';
    yield put(confirmLogind.succeed({ uid }));
  } catch (error) {
    yield put(confirmLogind.fail({ err: 1 }, error));
  }
}
