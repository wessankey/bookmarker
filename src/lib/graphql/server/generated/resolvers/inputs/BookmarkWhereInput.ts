import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagListRelationFilter } from "../inputs/BookmarkTagListRelationFilter";
import { CollectionListRelationFilter } from "../inputs/CollectionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

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

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagListRelationFilter, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionListRelationFilter, {
    nullable: true
  })
  collections?: CollectionListRelationFilter | undefined;
}
