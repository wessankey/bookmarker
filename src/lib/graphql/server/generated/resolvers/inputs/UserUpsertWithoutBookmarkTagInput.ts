import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookmarkTagInput } from "../inputs/UserCreateWithoutBookmarkTagInput";
import { UserUpdateWithoutBookmarkTagInput } from "../inputs/UserUpdateWithoutBookmarkTagInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserUpsertWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBookmarkTagInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBookmarkTagInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarkTagInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookmarkTagInput;
}
