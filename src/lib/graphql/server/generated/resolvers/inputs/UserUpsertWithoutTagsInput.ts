import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTagsInput } from "../inputs/UserCreateWithoutTagsInput";
import { UserUpdateWithoutTagsInput } from "../inputs/UserUpdateWithoutTagsInput";

@TypeGraphQL.InputType("UserUpsertWithoutTagsInput", {
  isAbstract: true
})
export class UserUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTagsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTagsInput;
}
