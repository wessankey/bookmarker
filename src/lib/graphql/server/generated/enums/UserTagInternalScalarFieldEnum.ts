import * as TypeGraphQL from "type-graphql";

export enum UserTagInternalScalarFieldEnum {
  userId = "userId",
  tagId = "tagId",
  tagColor = "tagColor"
}
TypeGraphQL.registerEnumType(UserTagInternalScalarFieldEnum, {
  name: "UserTagInternalScalarFieldEnum",
  description: undefined,
});
