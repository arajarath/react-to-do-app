import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./AppContext";
import "../src/styles.css";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  rootElement
);
