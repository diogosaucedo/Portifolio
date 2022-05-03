import { gql } from "graphql-tag";
import { LOGIN_GITHUB } from "./login";

export const GET_INFO_PROFILE_BY_LOGIN = gql`
{
    user(login: "${LOGIN_GITHUB}") {
      name
      bio
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              name
              url
              languages(last: 5) {
                edges {
                  node {
                    name
                  }
                }
              }
              id
            }
          }
        }
      }
    }
  }
`;
