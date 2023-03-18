import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BookmarkListRelationFilter } from "../inputs/BookmarkListRelationFilter";
import { BookmarkTagListRelationFilter } from "../inputs/BookmarkTagListRelationFilter";
import { CollectionListRelationFilter } from "../inputs/CollectionListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ExternalServiceCredentialListRelationFilter } from "../inputs/ExternalServiceCredentialListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserTagInternalListRelationFilter } from "../inputs/UserTagInternalListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  emailVerified?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkListRelationFilter, {
    nullable: true
  })
  bookmarks?: BookmarkListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionListRelationFilter, {
    nullable: true
  })
  collections?: CollectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AccountListRelationFilter, {
    nullable: true
  })
  accounts?: AccountListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SessionListRelationFilter, {
    nullable: true
  })
  sessions?: SessionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalListRelationFilter, {
    nullable: true
  })
  tags?: UserTagInternalListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialListRelationFilter, {
    nullable: true
  })
  externalServices?: ExternalServiceCredentialListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagListRelationFilter, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagListRelationFilter | undefined;
}
