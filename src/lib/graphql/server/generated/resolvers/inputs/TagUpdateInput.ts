import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateOneWithoutTagsNestedInput } from "../inputs/BookmarkUpdateOneWithoutTagsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTagsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTagsNestedInput";

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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tagColor?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTagsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutTagsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateOneWithoutTagsNestedInput, {
    nullable: true
  })
  Bookmark?: BookmarkUpdateOneWithoutTagsNestedInput | undefined;
}
