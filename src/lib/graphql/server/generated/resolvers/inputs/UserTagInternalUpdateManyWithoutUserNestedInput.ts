import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateManyUserInputEnvelope } from "../inputs/UserTagInternalCreateManyUserInputEnvelope";
import { UserTagInternalCreateOrConnectWithoutUserInput } from "../inputs/UserTagInternalCreateOrConnectWithoutUserInput";
import { UserTagInternalCreateWithoutUserInput } from "../inputs/UserTagInternalCreateWithoutUserInput";
import { UserTagInternalScalarWhereInput } from "../inputs/UserTagInternalScalarWhereInput";
import { UserTagInternalUpdateManyWithWhereWithoutUserInput } from "../inputs/UserTagInternalUpdateManyWithWhereWithoutUserInput";
import { UserTagInternalUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserTagInternalUpdateWithWhereUniqueWithoutUserInput";
import { UserTagInternalUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserTagInternalUpsertWithWhereUniqueWithoutUserInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserTagInternalUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserTagInternalCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserTagInternalCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserTagInternalUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserTagInternalCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereUniqueInput], {
    nullable: true
  })
  set?: UserTagInternalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserTagInternalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereUniqueInput], {
    nullable: true
  })
  delete?: UserTagInternalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalWhereUniqueInput], {
    nullable: true
  })
  connect?: UserTagInternalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserTagInternalUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserTagInternalUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserTagInternalScalarWhereInput[] | undefined;
}
