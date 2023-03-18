import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkOrderByWithRelationInput } from "../inputs/BookmarkOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { UserTagInternalOrderByWithRelationInput } from "../inputs/UserTagInternalOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookmarkTagOrderByWithRelationInput", {
  isAbstract: true
})
export class BookmarkTagOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookmarkId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  empty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookmarkOrderByWithRelationInput, {
    nullable: true
  })
  bookmark?: BookmarkOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalOrderByWithRelationInput, {
    nullable: true
  })
  userTag?: UserTagInternalOrderByWithRelationInput | undefined;
}
