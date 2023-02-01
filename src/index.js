import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import client from "./apolloClient";
import { AuthProvider } from "./context/authContext";
import { ApolloProvider } from "@apollo/client";

//React App needs access to:
//Client
// Auth Context
// Browser Router to /login /register

// client
//   .query({
//     query: gql`
//       query GetUsers {
//         getUsers{
//           email
//           profile {
//             occupation
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <AuthProvider> */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    {/* </AuthProvider> */}
  </BrowserRouter>
);
