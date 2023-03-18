import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookmarksInput } from "../inputs/UserCreateOrConnectWithoutBookmarksInput";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutBookmarksInput } from "../inputs/UserUpdateManyWithWhereWithoutBookmarksInput";
import { UserUpdateWithWhereUniqueWithoutBookmarksInput } from "../inputs/UserUpdateWithWhereUniqueWithoutBookmarksInput";
import { UserUpsertWithWhereUniqueWithoutBookmarksInput } from "../inputs/UserUpsertWithWhereUniqueWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutBookmarksNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutBookmarksNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutBookmarksInput], {
    nullable: true
  })
  create?: UserCreateWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutBookmarksInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutBookmarksInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutBookmarksInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutBookmarksInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutBookmarksInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
