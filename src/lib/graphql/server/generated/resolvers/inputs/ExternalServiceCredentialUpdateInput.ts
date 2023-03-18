import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput } from "../inputs/ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutExternalServicesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutExternalServicesNestedInput";

@TypeGraphQL.InputType("ExternalServiceCredentialUpdateInput", {
  isAbstract: true
})
export class ExternalServiceCredentialUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  apiToken?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput, {
    nullable: true
  })
  externalService?: ExternalServiceUpdateOneRequiredWithoutExternalServiceCredentialNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutExternalServicesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutExternalServicesNestedInput | undefined;
}
