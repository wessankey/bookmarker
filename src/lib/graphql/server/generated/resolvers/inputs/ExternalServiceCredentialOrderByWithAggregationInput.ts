import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialCountOrderByAggregateInput } from "../inputs/ExternalServiceCredentialCountOrderByAggregateInput";
import { ExternalServiceCredentialMaxOrderByAggregateInput } from "../inputs/ExternalServiceCredentialMaxOrderByAggregateInput";
import { ExternalServiceCredentialMinOrderByAggregateInput } from "../inputs/ExternalServiceCredentialMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExternalServiceCredentialOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExternalServiceCredentialOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  externalServiceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  apiToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExternalServiceCredentialCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExternalServiceCredentialMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceCredentialMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExternalServiceCredentialMinOrderByAggregateInput | undefined;
}
