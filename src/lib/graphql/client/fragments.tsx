import { graphql } from "../../../../gql";

export const ExternalServiceCredentialFragment = graphql(/* GraphQL */ `
  fragment ExternalServiceCredentialFragment on ExternalServiceCredential {
    id
    externalService {
      id
      type
      authType
    }
  }
`);

export const TagFragment = graphql(/* GraphQL */ `
  fragment TagFragment on Tag {
    id
    value
    tagColor
  }
`);

export const BookmarkFragment = graphql(/* GraphQL */ `
  fragment BookmarkFragment on Bookmark {
    id
    title
    description
    url
    createdAt
    tags {
      ...TagFragment
    }
  }
`);
