import * as TypeGraphQL from "type-graphql";

export enum ExternalServiceType {
  INSTAPAPER = "INSTAPAPER",
  READWISE = "READWISE"
}
TypeGraphQL.registerEnumType(ExternalServiceType, {
  name: "ExternalServiceType",
  description: undefined,
});
