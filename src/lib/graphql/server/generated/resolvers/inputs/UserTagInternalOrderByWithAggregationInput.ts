import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCountOrderByAggregateInput } from "../inputs/UserTagInternalCountOrderByAggregateInput";
import { UserTagInternalMaxOrderByAggregateInput } from "../inputs/UserTagInternalMaxOrderByAggregateInput";
import { UserTagInternalMinOrderByAggregateInput } from "../inputs/UserTagInternalMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserTagInternalOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserTagInternalOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagColor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserTagInternalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserTagInternalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserTagInternalMinOrderByAggregateInput | undefined;
}
