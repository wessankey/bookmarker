import * as TypeGraphQL from "type-graphql";

export enum CollectionScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  "public" = "public",
  createdAt = "createdAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(CollectionScalarFieldEnum, {
  name: "CollectionScalarFieldEnum",
  description: undefined,
});
