import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceCredentialOrderByRelationAggregateInput } from "../inputs/ExternalServiceCredentialOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExternalServiceOrderByWithRelationInput", {
  isAbstract: true
})
export class ExternalServiceOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ExternalServiceCredentialOrderByRelationAggregateInput, {
    nullable: true
  })
  ExternalServiceCredential?: ExternalServiceCredentialOrderByRelationAggregateInput | undefined;
}
