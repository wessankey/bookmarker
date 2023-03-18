import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateManyUserInputEnvelope } from "../inputs/CollectionCreateManyUserInputEnvelope";
import { CollectionCreateOrConnectWithoutUserInput } from "../inputs/CollectionCreateOrConnectWithoutUserInput";
import { CollectionCreateWithoutUserInput } from "../inputs/CollectionCreateWithoutUserInput";
import { CollectionScalarWhereInput } from "../inputs/CollectionScalarWhereInput";
import { CollectionUpdateManyWithWhereWithoutUserInput } from "../inputs/CollectionUpdateManyWithWhereWithoutUserInput";
import { CollectionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CollectionUpdateWithWhereUniqueWithoutUserInput";
import { CollectionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CollectionUpsertWithWhereUniqueWithoutUserInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class CollectionUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CollectionCreateWithoutUserInput], {
    nullable: true
  })
  create?: CollectionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  set?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  delete?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CollectionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CollectionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CollectionScalarWhereInput[] | undefined;
}
