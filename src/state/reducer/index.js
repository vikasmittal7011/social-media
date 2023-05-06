import { combineReducers } from "redux";
import showingAlert from "./showingAlert";

const reducers = combineReducers({
  alert: showingAlert,
});

export default reducers;
