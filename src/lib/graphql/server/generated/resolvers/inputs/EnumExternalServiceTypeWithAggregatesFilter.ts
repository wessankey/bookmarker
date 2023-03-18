import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumExternalServiceTypeFilter } from "../inputs/NestedEnumExternalServiceTypeFilter";
import { NestedEnumExternalServiceTypeWithAggregatesFilter } from "../inputs/NestedEnumExternalServiceTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.InputType("EnumExternalServiceTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumExternalServiceTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ExternalServiceType, {
    nullable: true
  })
  equals?: "INSTAPAPER" | "READWISE" | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceType], {
    nullable: true
  })
  in?: Array<"INSTAPAPER" | "READWISE"> | undefined;

  @TypeGraphQL.Field(_type => [ExternalServiceType], {
    nullable: true
  })
  notIn?: Array<"INSTAPAPER" | "READWISE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumExternalServiceTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumExternalServiceTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumExternalServiceTypeFilter | undefined;
}
