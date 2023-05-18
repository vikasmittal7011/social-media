import { combineReducers } from "redux";
import showingAlert from "./showingAlert";
import api from "./urlOfAPI";
import userLogin from "./userLogin";

const reducers = combineReducers({
  alert: showingAlert,
  api: api,
  userLogin: userLogin,
});

export default reducers;
