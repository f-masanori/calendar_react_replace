import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { GithubAction } from '../actions/github';
import * as ActionType from '../actions/githubConstants';
import { User } from '../services/github/models';

export interface CalendarState {
  name: string;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: CalendarState = {
  name: 'hoge',
  isLoading: false,
};

export const calendarReducer: Reducer<CalendarState, GithubAction> = (
  state: CalendarState = initialState,
  action: GithubAction,
): CalendarState => {
  console.log('reducer');
  console.log(state);
  switch (action.type) {
    case ActionType.GET_MEMBERS_START:
      return {
        ...state,
        name: '',
        isLoading: true,
      };
    case ActionType.GET_MEMBERS_SUCCEED:
      return {
        ...state,
        name: 'popo',
        isLoading: false,
      };
    case ActionType.GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      const _: never = action;

      return state;
    }
  }
};
