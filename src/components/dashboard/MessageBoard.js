import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../../context/authContext";
import { DashContext } from "../../context/dashContext";
import { GET_MESSAGE_BOARD } from "../../ApolloClient/gql/queries/messageBoard";

const MessageBoard = () => {
  const { messageBoardId } = useContext(DashContext);

  const { loading, error, data } = useQuery(GET_MESSAGE_BOARD, {
    variables: {
      messageBoardId: messageBoardId,
    },
    onCompleted: (data) => {
      console.log("This is messageBoard data: ", data);
    },
  });
  if (loading) {
    return "We stay loading";
  }
  console.log(data);
  return <div>This is the messageboard</div>;
};

export default MessageBoard;
