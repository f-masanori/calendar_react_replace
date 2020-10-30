import * as actions from './actions';
import { LoginUserState } from '../models/redux';

export const login = {
  start: (params: { email: string; password: string }) => ({
    type: actions.LOGIN_START,
    payload: params,
  }),

  succeed: ({ uid }: { uid: string }) => ({
    type: actions.LOGIN_SUCCEED,
    payload: { uid },
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

  succeed: ({ uid }: { uid: string }) => ({
    type: actions.SIGNUP_SUCCEED,
    payload: { uid },
  }),

  fail: (params: any, error: any) => ({
    type: actions.SIGNUP_FAIL,
    payload: { params, error },
    error: true,
  }),
};
export const signOut = {
  start: () => ({
    type: actions.SIGNOUT_START,
  }),

  succeed: () => ({
    type: actions.SIGNOUT_SUCCEED,
  }),

  fail: (error: any) => ({
    type: actions.SIGNOUT_FAIL,
    error,
  }),
};

export const confirmLogind = {
  start: (params: any) => ({
    type: actions.CONFIRM_LOGIND_START,
    payload: params,
  }),

  succeed: ({ uid }: { uid: string }) => ({
    type: actions.CONFIRM_LOGIND_SUCCEED,
    payload: { uid },
  }),

  fail: (params: any, error: any) => ({
    type: actions.CONFIRM_LOGIND_FAIL,
    payload: { params, error },
    error: true,
  }),
};
export const setLoginUserState = {
  succeed: ({ uid }: { uid: string }) => ({
    type: actions.SET_LOGIN_USER_STATE,
    payload: { uid },
    error: true,
  }),
};
export type AuthenticationAction =
  | ReturnType<typeof login.start>
  | ReturnType<typeof login.succeed>
  | ReturnType<typeof login.fail>
  | ReturnType<typeof confirmLogind.start>
  | ReturnType<typeof confirmLogind.succeed>
  | ReturnType<typeof confirmLogind.fail>
  | ReturnType<typeof setLoginUserState.succeed>;
