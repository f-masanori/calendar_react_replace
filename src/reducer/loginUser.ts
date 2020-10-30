import { Reducer } from 'redux';

import {
  AuthenticationAction,
  confirmLogind,
  setLoginUserState,
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
    case actions.SIGNUP_START:
      console.log('reducer SIGNUP_START');

      return {
        ...state,
        isLoading: true,
      };
    case actions.SIGNUP_SUCCEED:
      console.log('reducer SIGNUP_SUCCEED');

      return {
        ...state,
        uid: action.payload,
        isLoading: false,
      };
    case actions.LOGIN_START:
      console.log('reducer LOGIN_START');

      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_SUCCEED:
      console.log('reducer LOGIN_SUCCEED');
      console.log(action);

      return {
        ...state,
        uid: action.payload.uid,
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
      console.log(action.payload);
      console.log(action);

      return {
        ...state,
        uid: (action as ReturnType<typeof confirmLogind.succeed>).payload.uid,
        isLoading: false,
      };
    case actions.SIGNOUT_START:
      console.log('reducer SIGNOUT_START');

      return {
        ...state,
        isLoading: false,
      };
    case actions.SIGNOUT_SUCCEED:
      console.log('reducer SIGNOUT_SUCCEED');

      return {
        ...state,
        uid: '',
        isLoading: false,
      };
    case actions.SET_LOGIN_USER_STATE:
      console.log(action.payload);

      return {
        ...state,
        uid: action.payload.uid,
      };
    default: {
      return state;
    }
  }
};
