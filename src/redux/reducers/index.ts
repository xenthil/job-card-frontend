import authSlice  from "./AuthSlice";
import ClientSlice from "./ClientSlice";

import { combineReducers } from 'redux';

const rootReducer = {
  auth : authSlice,
  client : ClientSlice,
};

export default combineReducers(rootReducer);
  