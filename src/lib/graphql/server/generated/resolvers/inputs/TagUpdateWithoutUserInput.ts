import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateOneWithoutTagsNestedInput } from "../inputs/BookmarkUpdateOneWithoutTagsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TagUpdateWithoutUserInput", {
  isAbstract: true
})
export class TagUpdateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => BookmarkUpdateOneWithoutTagsNestedInput, {
    nullable: true
  })
  Bookmark?: BookmarkUpdateOneWithoutTagsNestedInput | undefined;
}
