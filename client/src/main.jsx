import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DbProvider } from "./Lib/DBSelectContext";
import { TokenProvider } from "./Lib/TokenContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <DbProvider>
        <App />
      </DbProvider>
    </TokenProvider>
  </React.StrictMode>
);
