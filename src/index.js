import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import client from "./apolloClient"
import { AuthProvider } from "./context/authContext";
import {
  ApolloProvider,
  gql,
} from "@apollo/client";

//React App needs access to:
//Client
// Auth Context
// Browser Router to /login /register


client
  .query({
    query: gql`
      query GetUsers {
        getUsers{
          email
          profile {
            occupation
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
  </BrowserRouter>
    </ApolloProvider>
    </AuthProvider>,
);
