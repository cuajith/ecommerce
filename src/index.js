import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { persistGate } from "redux-persist/lib/integration/react";

ReactDOM.render(
  <persistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </persistGate>,
  document.getElementById("root")
);
