import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalCreateManyTagInputEnvelope } from "../inputs/UserTagInternalCreateManyTagInputEnvelope";
import { UserTagInternalCreateOrConnectWithoutTagInput } from "../inputs/UserTagInternalCreateOrConnectWithoutTagInput";
import { UserTagInternalCreateWithoutTagInput } from "../inputs/UserTagInternalCreateWithoutTagInput";
import { UserTagInternalScalarWhereInput } from "../inputs/UserTagInternalScalarWhereInput";
import { UserTagInternalUpdateManyWithWhereWithoutTagInput } from "../inputs/UserTagInternalUpdateManyWithWhereWithoutTagInput";
import { UserTagInternalUpdateWithWhereUniqueWithoutTagInput } from "../inputs/UserTagInternalUpdateWithWhereUniqueWithoutTagInput";
import { UserTagInternalUpsertWithWhereUniqueWithoutTagInput } from "../inputs/UserTagInternalUpsertWithWhereUniqueWithoutTagInput";
import { UserTagInternalWhereUniqueInput } from "../inputs/UserTagInternalWhereUniqueInput";

@TypeGraphQL.InputType("UserTagInternalUpdateManyWithoutTagNestedInput", {
  isAbstract: true
})
export class UserTagInternalUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [UserTagInternalCreateWithoutTagInput], {
    nullable: true
  })
  create?: UserTagInternalCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: UserTagInternalCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: UserTagInternalUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: UserTagInternalCreateManyTagInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserTagInternalUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: UserTagInternalUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: UserTagInternalUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserTagInternalScalarWhereInput[] | undefined;
}
