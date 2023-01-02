import { combineReducers } from "redux";
import counterReducer from "./Counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
