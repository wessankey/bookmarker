import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookmarkTagInput } from "../inputs/UserCreateOrConnectWithoutBookmarkTagInput";
import { UserCreateWithoutBookmarkTagInput } from "../inputs/UserCreateWithoutBookmarkTagInput";
import { UserUpdateWithoutBookmarkTagInput } from "../inputs/UserUpdateWithoutBookmarkTagInput";
import { UserUpsertWithoutBookmarkTagInput } from "../inputs/UserUpsertWithoutBookmarkTagInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookmarkTagNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBookmarkTagNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarkTagInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookmarkTagInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBookmarkTagInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBookmarkTagInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBookmarkTagInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBookmarkTagInput | undefined;
}
