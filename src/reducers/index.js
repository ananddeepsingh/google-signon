import { combineReducers } from 'redux';

import errorMessageReducer from './errorMessageReducer';
import userDetailsReducer from './userDetailsReducer';
import authReducer from './authReducer';

const combinedReducer = combineReducers({
  auth: authReducer,
  errorMessage: errorMessageReducer,
  googleUserDetails: userDetailsReducer
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
