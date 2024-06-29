import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceAuthType } from "../../enums/ExternalServiceAuthType";

@TypeGraphQL.InputType("EnumExternalServiceAuthTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumExternalServiceAuthTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ExternalServiceAuthType, {
    nullable: true
  })
  set?: "USERNAME_AND_PASSWORD" | "API_TOKEN" | undefined;
}
