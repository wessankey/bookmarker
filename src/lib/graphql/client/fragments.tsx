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
