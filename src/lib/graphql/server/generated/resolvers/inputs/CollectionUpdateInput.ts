import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateManyWithoutCollectionsNestedInput } from "../inputs/BookmarkUpdateManyWithoutCollectionsNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCollectionsNestedInput } from "../inputs/UserUpdateOneWithoutCollectionsNestedInput";

@TypeGraphQL.InputType("CollectionUpdateInput", {
  isAbstract: true
})
export class CollectionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  public?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutCollectionsNestedInput, {
    nullable: true
  })
  bookmarks?: BookmarkUpdateManyWithoutCollectionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCollectionsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutCollectionsNestedInput | undefined;
}
