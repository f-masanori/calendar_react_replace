import { Reducer } from 'redux';

import {
  AuthenticationAction,
  confirmLogind,
} from '../actionCreaters/authentication';
import { getAllEvent, EventAction, addEvents } from '../actionCreaters/event';
import * as actions from '../actionCreaters/actions';
import { CalendarEventsState } from '../models/redux';

export const initialState: CalendarEventsState = {
  events: [],
  nextEventID: 0,
  isLoading: false,
};

export const EventReducer: Reducer<CalendarEventsState, EventAction> = (
  state: CalendarEventsState = initialState,
  action: EventAction,
): CalendarEventsState => {
  switch (action.type) {
    case actions.GET_ALL_EVENTS_START:
      console.log('reducer GET_ALL_EVENTS_START');

      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_ALL_EVENTS_SUCCEED:
      console.log('reducer GET_ALL_EVENTS_SUCCEED');

      return (action as ReturnType<typeof getAllEvent.succeed>).payload;
    case actions.GET_ALL_EVENTS_FAIL:
      console.log('reducer GET_ALL_EVENTS_FAIL');

      return {
        ...state,
        isLoading: false,
      };
    case actions.ADD_EVENTS:
      console.log('reducer ADD_EVENTS');

      return {
        ...state,
        events: [
          ...state.events,
          (action as ReturnType<typeof addEvents>).payload.event,
        ],
      };

    default: {
      return state;
    }
  }
};
