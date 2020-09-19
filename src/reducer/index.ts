import { combineReducers } from 'redux';
import { githubReducer, GithubState } from './reducer';
import { calendarReducer, CalendarState } from './calendar';

export interface ConbineState {
  github: GithubState;
  calendar: CalendarState;
}

const rootReducer = combineReducers({
  github: githubReducer,
  calendar: calendarReducer,
});

export default rootReducer;
