import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./store/authContext";
import AlertContextProvider from "./store/alertContext";
import { SocketProvider } from "./store/socketContext";

ReactDOM.render(
  <AuthContextProvider>
    <AlertContextProvider>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
    </AlertContextProvider>
    ,
  </AuthContextProvider>,
  document.getElementById("root")
);
