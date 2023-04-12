import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../../context/authContext";
import { DashContext, DashContextProvider } from "../../context/dashContext";
import { GET_MESSAGE_BOARD, GET_THREADS } from "../gql/messageBoard";
import GET_SINGLE_PORTAL from "../../ApolloClient/gql/cityPortal";

//Get Dashboard
export const GetCityPortal = (cityPortal) => {
  console.log("This is cityPortal data: ", cityPortal);
  const { getPortalData } = useContext(DashContext);
  const { loading, error, data } = useQuery(GET_SINGLE_PORTAL, {
    variables: {
      portalId: cityPortal,
    },
    onCompleted: (data) => {
      getPortalData(data.getSingleCityPortal);
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      getPortalData(data.getSingleCityPortal);
    }
  }, [data, getPortalData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return { loading, error, data };
};

//Message Board related queries
export const GetMessageBoard = (messageBoardId) => {
  const { loading, error, data } = useQuery(GET_MESSAGE_BOARD, {
    variables: {
      messageBoardId: messageBoardId,
    },
    onCompleted: (data) => {
      console.log("This is message board data: ", data.getMessageBoard);
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return data.messageBoard;
};

//Thread related queries
export const GetThreads = (messageBoardId) => {
  const { loading, error, data } = useQuery(GET_THREADS, {
    variables: {
      messageBoardId: messageBoardId,
    },
    onCompleted: (data) => {
      console.log("This is message board data: ", data.getThreads);
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return data.messageBoard;
};
