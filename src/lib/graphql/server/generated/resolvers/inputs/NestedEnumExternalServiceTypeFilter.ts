import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.InputType("NestedEnumExternalServiceTypeFilter", {
  isAbstract: true
})
export class NestedEnumExternalServiceTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumExternalServiceTypeFilter, {
    nullable: true
  })
  not?: NestedEnumExternalServiceTypeFilter | undefined;
}
