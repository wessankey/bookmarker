import * as TypeGraphQL from "type-graphql";

export enum ExternalServiceScalarFieldEnum {
  id = "id",
  type = "type",
  authType = "authType"
}
TypeGraphQL.registerEnumType(ExternalServiceScalarFieldEnum, {
  name: "ExternalServiceScalarFieldEnum",
  description: undefined,
});
