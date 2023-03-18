import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumExternalServiceAuthTypeWithAggregatesFilter } from "../inputs/EnumExternalServiceAuthTypeWithAggregatesFilter";
import { EnumExternalServiceTypeWithAggregatesFilter } from "../inputs/EnumExternalServiceTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExternalServiceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExternalServiceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExternalServiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExternalServiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExternalServiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExternalServiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumExternalServiceTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumExternalServiceTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumExternalServiceAuthTypeWithAggregatesFilter, {
    nullable: true
  })
  authType?: EnumExternalServiceAuthTypeWithAggregatesFilter | undefined;
}
