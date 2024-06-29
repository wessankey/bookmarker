import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumExternalServiceAuthTypeFieldUpdateOperationsInput } from "../inputs/EnumExternalServiceAuthTypeFieldUpdateOperationsInput";
import { EnumExternalServiceTypeFieldUpdateOperationsInput } from "../inputs/EnumExternalServiceTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExternalServiceUpdateManyMutationInput", {
  isAbstract: true
})
export class ExternalServiceUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumExternalServiceTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumExternalServiceTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumExternalServiceAuthTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  authType?: EnumExternalServiceAuthTypeFieldUpdateOperationsInput | undefined;
}
