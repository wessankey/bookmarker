import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkRelationFilter } from "../inputs/BookmarkRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TagWhereInput", {
  isAbstract: true
})
export class TagWhereInput {
  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  AND?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  OR?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  NOT?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagColor?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkRelationFilter, {
    nullable: true
  })
  Bookmark?: BookmarkRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bookmarkId?: StringNullableFilter | undefined;
}
