import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateNestedOneWithoutBookmarkTagInput } from "../inputs/BookmarkCreateNestedOneWithoutBookmarkTagInput";
import { UserTagInternalCreateNestedOneWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateNestedOneWithoutBookmarkTagInput";

@TypeGraphQL.InputType("BookmarkTagCreateWithoutUserInput", {
  isAbstract: true
})
export class BookmarkTagCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty?: string | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateNestedOneWithoutBookmarkTagInput, {
    nullable: false
  })
  bookmark!: BookmarkCreateNestedOneWithoutBookmarkTagInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateNestedOneWithoutBookmarkTagInput, {
    nullable: false
  })
  userTag!: UserTagInternalCreateNestedOneWithoutBookmarkTagInput;
}
