import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutUserTagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutUserTagNestedInput";
import { UserUpdateOneRequiredWithoutTagsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTagsNestedInput";

@TypeGraphQL.InputType("UserTagInternalUpdateWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserTagInternalUpdateWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTagsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTagsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutUserTagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutUserTagNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tagColor?: StringFieldUpdateOperationsInput | undefined;
}
