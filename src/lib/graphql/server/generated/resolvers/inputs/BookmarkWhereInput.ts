import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionListRelationFilter } from "../inputs/CollectionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookmarkWhereInput", {
  isAbstract: true
})
export class BookmarkWhereInput {
  @TypeGraphQL.Field(_type => [BookmarkWhereInput], {
    nullable: true
  })
  AND?: BookmarkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereInput], {
    nullable: true
  })
  OR?: BookmarkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereInput], {
    nullable: true
  })
  NOT?: BookmarkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TagListRelationFilter, {
    nullable: true
  })
  tags?: TagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionListRelationFilter, {
    nullable: true
  })
  collections?: CollectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;
}
