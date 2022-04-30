import { gql } from "graphql-tag";

export const GET_INFO_PROFILE_BY_LOGIN = gql`
{
    user(login: "diogosaucedo") {
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
            }
            }
        }
        }
    }
}
`;
