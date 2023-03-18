import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagOrderByRelationAggregateInput } from "../inputs/BookmarkTagOrderByRelationAggregateInput";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserTagInternalOrderByWithRelationInput", {
  isAbstract: true
})
export class UserTagInternalOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagColor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagOrderByRelationAggregateInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagOrderByRelationAggregateInput | undefined;
}
