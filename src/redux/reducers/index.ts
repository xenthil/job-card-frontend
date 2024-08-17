import authSlice  from "./AuthSlice";

import { combineReducers } from 'redux';

const rootReducer = {
  auth : authSlice,
};

export default combineReducers(rootReducer);
  