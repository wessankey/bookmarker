import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagListRelationFilter } from "../inputs/BookmarkTagListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserTagInternalWhereInput", {
  isAbstract: true
})
export class UserTagInternalWhereInput {
  @TypeGraphQL.Field(_type => [UserTagInternalWhereInput], {
    nullable: true
  })
  AND?: UserTagInternalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereInput], {
    nullable: true
  })
  OR?: UserTagInternalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereInput], {
    nullable: true
  })
  NOT?: UserTagInternalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagColor?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagListRelationFilter, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagListRelationFilter | undefined;
}
