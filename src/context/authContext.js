import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  userId: null,
  token: null,
  user: null,
  userProfile: null,
  cityPortal: null,
  tokenExpiration: null,
};

if (localStorage.getItem("token")) {
  const decodedToken = jwtDecode(localStorage.getItem("token"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
  } else {
    initialState.token = decodedToken;
  }
}

const AuthContext = createContext({
  userId: null,
  token: null,
  user: null,
  cityPortal: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        userId: action.payload.userId,
        cityPortal: action.payload.cityPortal,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        userId: null,
        cityPortal: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  function logout() {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        userId: state.userId,
        user: state.user,
        cityPortal: state.cityPortal,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
