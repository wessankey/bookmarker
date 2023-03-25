import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateManyWithoutBookmarksNestedInput } from "../inputs/CollectionUpdateManyWithoutBookmarksNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutBookmarkNestedInput } from "../inputs/TagUpdateManyWithoutBookmarkNestedInput";

@TypeGraphQL.InputType("BookmarkUpdateWithoutUserInput", {
  isAbstract: true
})
export class BookmarkUpdateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutBookmarkNestedInput, {
    nullable: true
  })
  tags?: TagUpdateManyWithoutBookmarkNestedInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateManyWithoutBookmarksNestedInput, {
    nullable: true
  })
  collections?: CollectionUpdateManyWithoutBookmarksNestedInput | undefined;
}