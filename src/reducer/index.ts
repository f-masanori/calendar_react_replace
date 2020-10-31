import { combineReducers } from 'redux';
import { LoginUserReducer } from './loginUser';
import { EventReducer } from './event';

import {
  LoginUserState,
  CalendarEventsState,
  CalendarEvent,
} from '../models/redux';

export interface ConbineState {
  loginUser: LoginUserState;
  calendarEvents: CalendarEventsState;
}

const rootReducer = combineReducers({
  loginUser: LoginUserReducer,
  calendarEvents: EventReducer,
});

export default rootReducer;
