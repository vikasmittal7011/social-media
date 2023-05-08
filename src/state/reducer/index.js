import { combineReducers } from "redux";
import showingAlert from "./showingAlert";
import addPlace from "./addPlace";

const reducers = combineReducers({
  alert: showingAlert,
  place: addPlace,
});

export default reducers;
