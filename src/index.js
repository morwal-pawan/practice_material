import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
=======
import "./index.css";
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router } from "react-router";
import { createHashHistory } from "history";

const history = createHashHistory();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={history}>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
