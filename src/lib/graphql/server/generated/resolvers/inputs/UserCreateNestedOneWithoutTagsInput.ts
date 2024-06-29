import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTagsInput } from "../inputs/UserCreateOrConnectWithoutTagsInput";
import { UserCreateWithoutTagsInput } from "../inputs/UserCreateWithoutTagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTagsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTagsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTagsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
