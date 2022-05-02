import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { confStore } from "./store/configureStore";
//import { createStore } from "redux";
//import { configureStore } from "./store/configureStore";
//import { Provider } from "react-redux";

//import MainLayout from "./components/MainLayout";
import { Router } from "./Routes/Routes";

const container = document.getElementById("root");
const root = createRoot(container);

const store = confStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
);
