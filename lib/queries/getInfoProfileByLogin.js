import { gql } from "graphql-tag";

export const GET_INFO_PROFILE_BY_LOGIN = gql`{user(login:"diogosaucedo"){name}}`;
