import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput } from "../inputs/BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput } from "../inputs/UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput";
import { UserUpdateOneRequiredWithoutBookmarkTagNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookmarkTagNestedInput";

@TypeGraphQL.InputType("BookmarkTagUpdateInput", {
  isAbstract: true
})
export class BookmarkTagUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  empty?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput, {
    nullable: true
  })
  bookmark?: BookmarkUpdateOneRequiredWithoutBookmarkTagNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookmarkTagNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookmarkTagNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput, {
    nullable: true
  })
  userTag?: UserTagInternalUpdateOneRequiredWithoutBookmarkTagNestedInput | undefined;
}
