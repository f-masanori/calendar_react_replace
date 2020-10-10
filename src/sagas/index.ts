import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actionCreaters/actions';
import {
  runLogin,
  runConfirmLogind,
  runGetAllEvent,
  runSignUp,
} from './authentication';

export default function* rootSaga() {
  yield takeEvery(actions.LOGIN_START, runLogin);
  yield takeEvery(actions.SIGNUP_START, runSignUp);

  yield takeEvery(actions.GET_ALL_EVENTS_START, runGetAllEvent);

  yield takeEvery(actions.CONFIRM_LOGIND_START, runConfirmLogind);
}
