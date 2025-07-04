import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateManyWithoutBookmarksNestedInput } from "../inputs/CollectionUpdateManyWithoutBookmarksNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookmarksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookmarksNestedInput";

@TypeGraphQL.InputType("BookmarkUpdateWithoutTagsInput", {
  isAbstract: true
})
export class BookmarkUpdateWithoutTagsInput {
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

  @TypeGraphQL.Field(_type => CollectionUpdateManyWithoutBookmarksNestedInput, {
    nullable: true
  })
  collections?: CollectionUpdateManyWithoutBookmarksNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookmarksNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookmarksNestedInput | undefined;
}
