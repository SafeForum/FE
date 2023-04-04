import React, { useReducer, createContext, useState } from "react";

const initialState = {
  threads: [],
  id: null,
};

const MessageBoardContext = createContext({
  threads: [],
  id: null,
  getMessageBoardData: (messageBoardData) => {},
});

function messageBoardReducer(state, action) {
  console.log("This is state: ", action);
  switch (action.type) {
    case "PORTAL_DATA":
      return {
        ...state,
        threads: action.payload.threads,
        id: action.payload._id,
      };
    default:
      return state;
  }
}

function MessageBoardContextProvider(props) {
    const [state, dispatch] = useReducer(messageBoardReducer, initialState);

    const getMessageBoardData = (portalData) => {
      dispatch({
        type: "PORTAL_DATA",
        payload: portalData,
      });
    };

    const value = {
        threads: state.threads,
        id: state._id,
        getMessageBoardData,
    }


    return (
      <MessageBoardContext.Provider
        value={value}
      >
        {props.children}
      </MessageBoardContext.Provider>
    );
  }

  export { MessageBoardContext, MessageBoardContextProvider };
