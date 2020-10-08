import { Reducer } from 'redux';

import {
  AuthenticationAction,
  confirmLogind,
} from '../actionCreaters/authentication';
import * as actions from '../actionCreaters/actions';
import { LoginUserState } from '../models/redux';

export const initialState: LoginUserState = {
  uid: '',
  name: '',
  iconUrl: '',
  isLoading: false,
};

export const LoginUserReducer: Reducer<LoginUserState, AuthenticationAction> = (
  state: LoginUserState = initialState,
  action: AuthenticationAction,
): LoginUserState => {
  switch (action.type) {
    case actions.LOGIN_START:
      console.log('reducer LOGIN_START');

      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_SUCCEED:
      console.log('reducer LOGIN_SUCCEED');

      return {
        ...state,
        isLoading: false,
      };
    case actions.CONFIRM_LOGIND_START:
      console.log('reducer CONFIRM_LOGIND_START');

      return {
        ...state,
        uid: 'pending',
        isLoading: false,
      };
    case actions.CONFIRM_LOGIND_SUCCEED:
      console.log('reducer CONFIRM_LOGIND_SUCCEED');

      return {
        ...state,
        // uid: (action as ReturnType<typeof confirmLogind.succeed>).payload.uid,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};
