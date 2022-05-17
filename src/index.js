import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
       <App />
     </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
