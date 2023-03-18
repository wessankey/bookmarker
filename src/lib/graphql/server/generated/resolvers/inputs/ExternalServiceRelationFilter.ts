import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceWhereInput } from "../inputs/ExternalServiceWhereInput";

@TypeGraphQL.InputType("ExternalServiceRelationFilter", {
  isAbstract: true
})
export class ExternalServiceRelationFilter {
  @TypeGraphQL.Field(_type => ExternalServiceWhereInput, {
    nullable: true
  })
  is?: ExternalServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceWhereInput, {
    nullable: true
  })
  isNot?: ExternalServiceWhereInput | undefined;
}
