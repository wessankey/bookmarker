import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCountOrderByAggregateInput } from "../inputs/BookmarkTagCountOrderByAggregateInput";
import { BookmarkTagMaxOrderByAggregateInput } from "../inputs/BookmarkTagMaxOrderByAggregateInput";
import { BookmarkTagMinOrderByAggregateInput } from "../inputs/BookmarkTagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookmarkTagOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookmarkTagOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => BookmarkTagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookmarkTagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookmarkTagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookmarkTagMinOrderByAggregateInput | undefined;
}
