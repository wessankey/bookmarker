import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyUserInputEnvelope } from "../inputs/TagCreateManyUserInputEnvelope";
import { TagCreateOrConnectWithoutUserInput } from "../inputs/TagCreateOrConnectWithoutUserInput";
import { TagCreateWithoutUserInput } from "../inputs/TagCreateWithoutUserInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutUserInput } from "../inputs/TagUpdateManyWithWhereWithoutUserInput";
import { TagUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TagUpdateWithWhereUniqueWithoutUserInput";
import { TagUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TagUpsertWithWhereUniqueWithoutUserInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class TagUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutUserInput], {
    nullable: true
  })
  create?: TagCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TagUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TagCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TagCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  set?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  delete?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TagUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TagUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagScalarWhereInput[] | undefined;
}
