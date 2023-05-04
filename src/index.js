import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import client from "./apolloClient";
import { AuthContextProvider } from "./context/authContext";
import { ApolloProvider } from "@apollo/client";
import { DashContextProvider } from "./context/dashContext";
import { MessageBoardContextProvider } from "./context/messageBoardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <DashContextProvider>
        <MessageBoardContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MessageBoardContextProvider>
      </DashContextProvider>
    </AuthContextProvider>
  </ApolloProvider>
);
