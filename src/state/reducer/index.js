import { combineReducers } from "redux";
import showingAlert from "./showingAlert";
import addPlace from "./addPlace";
import api from "./urlOfAPI";
import userLogin from "./userLogin";

const reducers = combineReducers({
  alert: showingAlert,
  place: addPlace,
  api: api,
  userLogin: userLogin,
});

export default reducers;
