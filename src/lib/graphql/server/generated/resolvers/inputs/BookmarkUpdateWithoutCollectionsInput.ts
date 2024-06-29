import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutBookmarksNestedInput } from "../inputs/TagUpdateManyWithoutBookmarksNestedInput";
import { UserUpdateOneRequiredWithoutBookmarksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookmarksNestedInput";

@TypeGraphQL.InputType("BookmarkUpdateWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkUpdateWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutBookmarksNestedInput, {
    nullable: true
  })
  tags?: TagUpdateManyWithoutBookmarksNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookmarksNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookmarksNestedInput | undefined;
}
