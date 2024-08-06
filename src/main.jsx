import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DatabaseProvider } from './DatabaseContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <DatabaseProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </DatabaseProvider>
  </React.StrictMode>
);
