import * as TypeGraphQL from "type-graphql";

export enum ExternalServiceAuthType {
  USERNAME_AND_PASSWORD = "USERNAME_AND_PASSWORD",
  API_TOKEN = "API_TOKEN"
}
TypeGraphQL.registerEnumType(ExternalServiceAuthType, {
  name: "ExternalServiceAuthType",
  description: undefined,
});
