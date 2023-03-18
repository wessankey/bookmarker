import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBookmarkTagInput } from "../inputs/UserCreateNestedOneWithoutBookmarkTagInput";
import { UserTagInternalCreateNestedOneWithoutBookmarkTagInput } from "../inputs/UserTagInternalCreateNestedOneWithoutBookmarkTagInput";

@TypeGraphQL.InputType("BookmarkTagCreateWithoutBookmarkInput", {
  isAbstract: true
})
export class BookmarkTagCreateWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookmarkTagInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookmarkTagInput;

  @TypeGraphQL.Field(_type => UserTagInternalCreateNestedOneWithoutBookmarkTagInput, {
    nullable: false
  })
  userTag!: UserTagInternalCreateNestedOneWithoutBookmarkTagInput;
}
