import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./store/authContext";
import { SocketProvider } from "./store/socketContext";

ReactDOM.render(
  <AuthContextProvider>
    <SocketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SocketProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
