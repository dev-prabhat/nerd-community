import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { theme } from "./CustomTheme"
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
     </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
