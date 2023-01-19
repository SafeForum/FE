import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";

import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

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
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
);
