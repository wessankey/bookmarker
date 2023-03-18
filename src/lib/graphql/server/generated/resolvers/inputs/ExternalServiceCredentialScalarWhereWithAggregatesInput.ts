import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExternalServiceCredentialScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExternalServiceCredentialScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExternalServiceCredentialScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExternalServiceCredentialScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceCredentialScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExternalServiceCredentialScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  externalServiceId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  username?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  password?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  apiToken?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
