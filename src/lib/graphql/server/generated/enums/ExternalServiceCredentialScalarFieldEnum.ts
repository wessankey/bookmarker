import * as TypeGraphQL from "type-graphql";

export enum ExternalServiceCredentialScalarFieldEnum {
  id = "id",
  externalServiceId = "externalServiceId",
  username = "username",
  password = "password",
  apiToken = "apiToken",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ExternalServiceCredentialScalarFieldEnum, {
  name: "ExternalServiceCredentialScalarFieldEnum",
  description: undefined,
});
