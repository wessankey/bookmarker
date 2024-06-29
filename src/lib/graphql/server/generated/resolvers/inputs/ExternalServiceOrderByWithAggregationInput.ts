import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCountOrderByAggregateInput } from "../inputs/ExternalServiceCountOrderByAggregateInput";
import { ExternalServiceMaxOrderByAggregateInput } from "../inputs/ExternalServiceMaxOrderByAggregateInput";
import { ExternalServiceMinOrderByAggregateInput } from "../inputs/ExternalServiceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExternalServiceOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExternalServiceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExternalServiceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExternalServiceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExternalServiceMinOrderByAggregateInput | undefined;
}
