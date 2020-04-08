import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { dashBoard } from "./dashboardReducers";
import {authenticateUser} from './authenticateUser';

const rootReducer = combineReducers({
  homeData:homeReducer,
  dashboardData:dashBoard,
  isValidUser:authenticateUser
});

export default rootReducer;
