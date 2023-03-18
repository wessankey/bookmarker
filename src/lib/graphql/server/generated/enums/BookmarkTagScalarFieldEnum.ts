import * as TypeGraphQL from "type-graphql";

export enum BookmarkTagScalarFieldEnum {
  bookmarkId = "bookmarkId",
  tagId = "tagId",
  userId = "userId",
  empty = "empty"
}
TypeGraphQL.registerEnumType(BookmarkTagScalarFieldEnum, {
  name: "BookmarkTagScalarFieldEnum",
  description: undefined,
});
