import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist"

// if(process.env.NODE_ENV === "development") {
//     middleware.push(logger)
// }
const middleware = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);