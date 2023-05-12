import { combineReducers } from "redux";
import showingAlert from "./showingAlert";
import addPlace from "./addPlace";
import loading from "./loading";
import api from "./urlOfAPI";

const reducers = combineReducers({
  alert: showingAlert,
  place: addPlace,
  loading: loading,
  api: api,
});

export default reducers;
