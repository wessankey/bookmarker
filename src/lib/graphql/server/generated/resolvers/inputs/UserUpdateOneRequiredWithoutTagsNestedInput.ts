import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTagsInput } from "../inputs/UserCreateOrConnectWithoutTagsInput";
import { UserCreateWithoutTagsInput } from "../inputs/UserCreateWithoutTagsInput";
import { UserUpdateWithoutTagsInput } from "../inputs/UserUpdateWithoutTagsInput";
import { UserUpsertWithoutTagsInput } from "../inputs/UserUpsertWithoutTagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTagsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTagsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTagsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTagsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTagsInput | undefined;
}
