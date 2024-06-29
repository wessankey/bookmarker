import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumExternalServiceAuthTypeFilter } from "../inputs/NestedEnumExternalServiceAuthTypeFilter";
import { NestedEnumExternalServiceAuthTypeWithAggregatesFilter } from "../inputs/NestedEnumExternalServiceAuthTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";

@TypeGraphQL.InputType("EnumExternalServiceAuthTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumExternalServiceAuthTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ExternalServiceAuthType, {
    nullable: true
  })
  equals?: "USERNAME_AND_PASSWORD" | "API_TOKEN" | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceAuthType], {
    nullable: true
  })
  in?: Array<"USERNAME_AND_PASSWORD" | "API_TOKEN"> | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceAuthType], {
    nullable: true
  })
  notIn?: Array<"USERNAME_AND_PASSWORD" | "API_TOKEN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceAuthTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumExternalServiceAuthTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceAuthTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumExternalServiceAuthTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceAuthTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumExternalServiceAuthTypeFilter | undefined;
}
