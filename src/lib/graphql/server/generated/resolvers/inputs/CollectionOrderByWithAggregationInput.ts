import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCountOrderByAggregateInput } from "../inputs/CollectionCountOrderByAggregateInput";
import { CollectionMaxOrderByAggregateInput } from "../inputs/CollectionMaxOrderByAggregateInput";
import { CollectionMinOrderByAggregateInput } from "../inputs/CollectionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionOrderByWithAggregationInput", {
  isAbstract: true
})
export class CollectionOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CollectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CollectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CollectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CollectionMinOrderByAggregateInput | undefined;
}
