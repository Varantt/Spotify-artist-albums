import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderContext } from "./context/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>
);
