import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "font-awesome/css/font-awesome.css";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <BrowserRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
