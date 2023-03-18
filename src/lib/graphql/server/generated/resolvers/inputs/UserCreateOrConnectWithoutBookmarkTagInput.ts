import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookmarkTagInput } from "../inputs/UserCreateWithoutBookmarkTagInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarkTagInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookmarkTagInput;
}
