import { combineReducers } from "redux";
import showingAlert from "./showingAlert";
import addPlace from "./addPlace";
import loading from "./loading";

const reducers = combineReducers({
  alert: showingAlert,
  place: addPlace,
  loading: loading,
});

export default reducers;
