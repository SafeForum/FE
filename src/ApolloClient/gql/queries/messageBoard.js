import { gql } from "@apollo/client";

export const GET_MESSAGE_BOARD = gql`
  query GetMessageBoard($messageBoardId: String!) {
    getMessageBoard(messageBoardId: $messageBoardId) {
      _id
      threads {
        subject
        creator {
          _id
          firstName
          lastName
        }
      }
      cityPortal {
        _id
      }
    }
  }
`;

export const GET_THREADS = gql`
  query GetThreads($messageBoardId: String!) {
    getThreads(messageBoardId: $messageBoardId) {
      _id
      messageBoard {
        _id
      }
      subject
      body
      creator {
        firstName
lastName
      }
      createdAt
      updatedAt
      comments {
        _id
        likes {
          _id
        }
      }
    }
  }
`;
