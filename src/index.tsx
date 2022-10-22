import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Router } from "./plugins/router/wrapper/Router";
import { PagesController } from "./pages/PagesController";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <Router>
      <PagesController />
    </Router>
  </Provider>
);
