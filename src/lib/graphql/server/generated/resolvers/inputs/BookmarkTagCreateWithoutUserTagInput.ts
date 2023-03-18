import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateNestedOneWithoutBookmarkTagInput } from "../inputs/BookmarkCreateNestedOneWithoutBookmarkTagInput";
import { UserCreateNestedOneWithoutBookmarkTagInput } from "../inputs/UserCreateNestedOneWithoutBookmarkTagInput";

@TypeGraphQL.InputType("BookmarkTagCreateWithoutUserTagInput", {
  isAbstract: true
})
export class BookmarkTagCreateWithoutUserTagInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty?: string | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateNestedOneWithoutBookmarkTagInput, {
    nullable: false
  })
  bookmark!: BookmarkCreateNestedOneWithoutBookmarkTagInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookmarkTagInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookmarkTagInput;
}
