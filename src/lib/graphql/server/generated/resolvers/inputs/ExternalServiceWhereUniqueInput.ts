import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.InputType("ExternalServiceWhereUniqueInput", {
  isAbstract: true
})
export class ExternalServiceWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceType, {
    nullable: true
  })
  type?: "INSTAPAPER" | "READWISE" | undefined;
}
