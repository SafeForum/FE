import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { DashContext } from "../../context/dashContext";
import { GET_MESSAGE_BOARD } from "../../ApolloClient/gql/queries/messageBoard";
import { MessageBoardContext } from "../../context/messageBoardContext";
import Threads from "./Threads";

const MessageBoard = () => {
  const { messageBoardId } = useContext(DashContext);
  const { getMessageBoardData, threads } = useContext(MessageBoardContext);

  const { loading, error} = useQuery(GET_MESSAGE_BOARD, {
    variables: {
      messageBoardId: messageBoardId,
    },
    onCompleted: (data) => {
      getMessageBoardData(data.getMessageBoard);
    },
  });
  if (loading) {
    return "We stay loading";
  }

  return (
    <div>
      <h1>MessageBoard</h1>
      <Threads threads={threads} />
    </div>
  );
};

export default MessageBoard;
