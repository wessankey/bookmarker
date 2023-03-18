import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { BookmarkOrderByRelationAggregateInput } from "../inputs/BookmarkOrderByRelationAggregateInput";
import { BookmarkTagOrderByRelationAggregateInput } from "../inputs/BookmarkTagOrderByRelationAggregateInput";
import { CollectionOrderByRelationAggregateInput } from "../inputs/CollectionOrderByRelationAggregateInput";
import { ExternalServiceCredentialOrderByRelationAggregateInput } from "../inputs/ExternalServiceCredentialOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { UserTagInternalOrderByRelationAggregateInput } from "../inputs/UserTagInternalOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookmarkOrderByRelationAggregateInput, {
    nullable: true
  })
  bookmarks?: BookmarkOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionOrderByRelationAggregateInput, {
    nullable: true
  })
  collections?: CollectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput, {
    nullable: true
  })
  accounts?: AccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput, {
    nullable: true
  })
  sessions?: SessionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalOrderByRelationAggregateInput, {
    nullable: true
  })
  tags?: UserTagInternalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialOrderByRelationAggregateInput, {
    nullable: true
  })
  externalServices?: ExternalServiceCredentialOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagOrderByRelationAggregateInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagOrderByRelationAggregateInput | undefined;
}
