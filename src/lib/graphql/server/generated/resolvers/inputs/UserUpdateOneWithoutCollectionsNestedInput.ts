import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCollectionsInput } from "../inputs/UserCreateOrConnectWithoutCollectionsInput";
import { UserCreateWithoutCollectionsInput } from "../inputs/UserCreateWithoutCollectionsInput";
import { UserUpdateWithoutCollectionsInput } from "../inputs/UserUpdateWithoutCollectionsInput";
import { UserUpsertWithoutCollectionsInput } from "../inputs/UserUpsertWithoutCollectionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCollectionsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCollectionsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCollectionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCollectionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCollectionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCollectionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCollectionsInput | undefined;
}
