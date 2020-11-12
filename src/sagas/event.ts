import { call, put, takeEvery } from 'redux-saga/effects';
import {
  registerUser,
  getAllEventByAPI,
  FetchEvents,
} from '../services/backendAPI/event';
import { convFetchedDtoPreD } from '../services/adapter/backendAPI';

import { getAllEvent } from '../actionCreaters/event';

export function* runGetAllEvent(action: ReturnType<typeof getAllEvent.start>) {
  try {
    const data: FetchEvents = yield call(getAllEventByAPI);
    const forReducer = convFetchedDtoPreD(data);
    yield put(getAllEvent.succeed(forReducer));
  } catch (error) {
    alert('イベント受信エラー');
    console.log(error);
    yield put(getAllEvent.fail({ err: 1 }, error));
  }
}
