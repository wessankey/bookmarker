import * as TypeGraphQL from "type-graphql";

export enum BookmarkScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  url = "url",
  userId = "userId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(BookmarkScalarFieldEnum, {
  name: "BookmarkScalarFieldEnum",
  description: undefined,
});
