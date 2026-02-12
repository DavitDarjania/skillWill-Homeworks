import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query Authors {
    authors {
      id
      name
      verified
    }
  }
`;

export const GET_AUTHOR = gql`
  query Authors($authorId: ID!) {
    author(id: $authorId) {
      id
      name
      verified
    }
  }
`;
