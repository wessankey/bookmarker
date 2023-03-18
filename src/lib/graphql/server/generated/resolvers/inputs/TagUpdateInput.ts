import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTagInternalUpdateManyWithoutTagNestedInput } from "../inputs/UserTagInternalUpdateManyWithoutTagNestedInput";

@TypeGraphQL.InputType("TagUpdateInput", {
  isAbstract: true
})
export class TagUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  UserTag?: UserTagInternalUpdateManyWithoutTagNestedInput | undefined;
}
