import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actionCreaters/actions';
import { runLogin, runConfirmLogind } from './authentication';

export default function* rootSaga() {
  yield takeEvery(actions.LOGIN_START, runLogin);
  // yield takeEvery(actions.LOGIN_START, runLogin);

  yield takeEvery(actions.CONFIRM_LOGIND_START, runConfirmLogind);
}
