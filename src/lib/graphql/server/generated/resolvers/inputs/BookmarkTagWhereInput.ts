import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkRelationFilter } from "../inputs/BookmarkRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { UserTagInternalRelationFilter } from "../inputs/UserTagInternalRelationFilter";

@TypeGraphQL.InputType("BookmarkTagWhereInput", {
  isAbstract: true
})
export class BookmarkTagWhereInput {
  @TypeGraphQL.Field(_type => [BookmarkTagWhereInput], {
    nullable: true
  })
  AND?: BookmarkTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereInput], {
    nullable: true
  })
  OR?: BookmarkTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereInput], {
    nullable: true
  })
  NOT?: BookmarkTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookmarkId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  empty?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkRelationFilter, {
    nullable: true
  })
  bookmark?: BookmarkRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalRelationFilter, {
    nullable: true
  })
  userTag?: UserTagInternalRelationFilter | undefined;
}
