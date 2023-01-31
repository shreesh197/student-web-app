import rootReducer from "./reducers";

import { legacy_createStore as createStore, compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null;
export const store =
  typeof window !== "undefined"
    ? createStore(rootReducer, composeEnhancers())
    : null;
