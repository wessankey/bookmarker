import * as TypeGraphQL from "type-graphql";

export enum TagScalarFieldEnum {
  id = "id",
  value = "value",
  userId = "userId",
  tagColor = "tagColor",
  bookmarkId = "bookmarkId"
}
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
  name: "TagScalarFieldEnum",
  description: undefined,
});
