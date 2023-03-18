import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserUpdateWithoutBookmarksInput } from "../inputs/UserUpdateWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutBookmarksInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBookmarksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookmarksInput;
}
