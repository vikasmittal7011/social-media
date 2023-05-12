import { combineReducers } from "redux";
import showingAlert from "./showingAlert";
import addPlace from "./addPlace";
import api from "./urlOfAPI";

const reducers = combineReducers({
  alert: showingAlert,
  place: addPlace,
  api: api,
});

export default reducers;
