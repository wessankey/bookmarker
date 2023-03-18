import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookmarkTagInput } from "../inputs/UserCreateOrConnectWithoutBookmarkTagInput";
import { UserCreateWithoutBookmarkTagInput } from "../inputs/UserCreateWithoutBookmarkTagInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarkTagInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookmarkTagInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
