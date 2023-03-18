import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagUpdateManyWithoutUserTagNestedInput } from "../inputs/BookmarkTagUpdateManyWithoutUserTagNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutUserTagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutUserTagNestedInput";

@TypeGraphQL.InputType("UserTagInternalUpdateWithoutUserInput", {
  isAbstract: true
})
export class UserTagInternalUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutUserTagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutUserTagNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tagColor?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateManyWithoutUserTagNestedInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagUpdateManyWithoutUserTagNestedInput | undefined;
}
