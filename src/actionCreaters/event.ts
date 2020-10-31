import * as actions from './actions';
import { CalendarEventsState } from '../models/redux';

export const getAllEvent = {
  start: () => ({
    type: actions.GET_ALL_EVENTS_START,
  }),

  succeed: (result: CalendarEventsState) => ({
    type: actions.GET_ALL_EVENTS_SUCCEED,
    payload: result,
  }),

  fail: (params: any, error: any) => ({
    type: actions.GET_ALL_EVENTS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type EventAction =
  | ReturnType<typeof getAllEvent.start>
  | ReturnType<typeof getAllEvent.succeed>
  | ReturnType<typeof getAllEvent.fail>;
