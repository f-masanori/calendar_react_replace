import { all, call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';

import * as Action from '../actions/githubConstants';
import { getMembers } from '../actions/github';
import { getMembersFactory } from '../services/github/api';

function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload;

  try {
    const api = getMembersFactory();
    const users = yield call(api, companyName);
    console.log("sagas")
    yield put(getMembers.succeed({ companyName }, { users }));
  } catch (error) {
    yield put(getMembers.fail({ companyName }, error));
  }
}

// export function* watchGetMembers() {
//   /* Action.GET_MEMBERS_STARTのアクションが実行されたら、
//   runGetMembersが実行される
//   */
//   yield takeLatest(Action.GET_MEMBERS_START, runGetMembers);
// }

export default function* rootSaga() {
  /* 
  Action.GET_MEMBERS_STARTのアクションが実行されたら、
  runGetMembersが実行される
  */
  yield takeEvery(Action.GET_MEMBERS_START, runGetMembers)
}

//https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html