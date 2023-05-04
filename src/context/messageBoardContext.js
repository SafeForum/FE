import React, { useReducer, createContext, useState } from "react";

const initialState = {
  threads: null,
};

const MessageBoardContext = createContext({
  threads: [],
  getMessageBoardData: (messageBoardData) => {},
});

function messageBoardReducer(state, action) {
  switch (action.type) {
    case "MB_DATA":
      return {
        ...state,
        threads: action.payload.threads,
      };
    default:
      return state;
  }
}

function MessageBoardContextProvider(props) {
    const [state, dispatch] = useReducer(messageBoardReducer, initialState);

    const getMessageBoardData = (messageBoardData) => {

      dispatch({
        type: "MB_DATA",
        payload: messageBoardData,
      });
    };

    const value = {
        threads: state.threads,
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
