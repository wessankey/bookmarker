import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceType } from "../../enums/ExternalServiceType";

@TypeGraphQL.InputType("EnumExternalServiceTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumExternalServiceTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ExternalServiceType, {
    nullable: true
  })
  set?: "INSTAPAPER" | "READWISE" | undefined;
}
