import "./index.css";

import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createStore, compose } from "redux";

import reducers from "./reducers";
import middlewares from "./middlewares";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const store = createStore(reducers, composeEnhancers(middlewares));

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);