import * as actions from './actions';
import { LoginUserState } from '../models/redux';

export const login = {
  start: (params: { email: string; password: string }) => ({
    type: actions.LOGIN_START,
    payload: params,
  }),

  succeed: (result: LoginUserState) => ({
    type: actions.LOGIN_SUCCEED,
    payload: result,
  }),

  fail: (params: any, error: any) => ({
    type: actions.LOGIN_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export const signUp = {
  start: (params: { email: string; password: string }) => ({
    type: actions.SIGNUP_START,
    payload: params,
  }),

  succeed: (result: LoginUserState) => ({
    type: actions.SIGNUP_SUCCEED,
    payload: result,
  }),

  fail: (params: any, error: any) => ({
    type: actions.SIGNUP_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export const confirmLogind = {
  start: (params: any) => ({
    type: actions.CONFIRM_LOGIND_START,
    payload: params,
  }),

  succeed: (result: any) => ({
    type: actions.CONFIRM_LOGIND_SUCCEED,
    payload: result,
  }),

  fail: (params: any, error: any) => ({
    type: actions.CONFIRM_LOGIND_FAIL,
    payload: { params, error },
    error: true,
  }),
};
export type AuthenticationAction =
  | ReturnType<typeof login.start>
  | ReturnType<typeof login.succeed>
  | ReturnType<typeof login.fail>
  | ReturnType<typeof confirmLogind.start>
  | ReturnType<typeof confirmLogind.succeed>
  | ReturnType<typeof confirmLogind.fail>;
