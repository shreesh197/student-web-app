import { combineReducers } from "redux";
import counterReducer from "./Counter";
import mcqReducer from "./MCQ";

const rootReducer = combineReducers({
  counter: counterReducer,
  mcqQuestions: mcqReducer,
});

export default rootReducer;
