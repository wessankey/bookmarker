import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagUpdateManyWithoutUserTagNestedInput } from "../inputs/BookmarkTagUpdateManyWithoutUserTagNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTagsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTagsNestedInput";

@TypeGraphQL.InputType("UserTagInternalUpdateWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTagsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTagsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tagColor?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateManyWithoutUserTagNestedInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagUpdateManyWithoutUserTagNestedInput | undefined;
}
