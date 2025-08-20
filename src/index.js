import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";
import { BrowserRouter as Router } from "react-router-dom";

// Initialize Google Analytics
ReactGA.initialize("G-HSDN2YLKBJ");

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Performance measurement
reportWebVitals();
