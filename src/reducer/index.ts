import { combineReducers } from 'redux';
import { LoginUserReducer } from './loginUser';
import { LoginUserState } from '../models/redux';

export interface ConbineState {
  loginUser: LoginUserState;
}

const rootReducer = combineReducers({
  loginUser: LoginUserReducer,
});

export default rootReducer;
