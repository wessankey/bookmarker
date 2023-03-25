import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyBookmarkInputEnvelope } from "../inputs/TagCreateManyBookmarkInputEnvelope";
import { TagCreateOrConnectWithoutBookmarkInput } from "../inputs/TagCreateOrConnectWithoutBookmarkInput";
import { TagCreateWithoutBookmarkInput } from "../inputs/TagCreateWithoutBookmarkInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutBookmarkInput } from "../inputs/TagUpdateManyWithWhereWithoutBookmarkInput";
import { TagUpdateWithWhereUniqueWithoutBookmarkInput } from "../inputs/TagUpdateWithWhereUniqueWithoutBookmarkInput";
import { TagUpsertWithWhereUniqueWithoutBookmarkInput } from "../inputs/TagUpsertWithWhereUniqueWithoutBookmarkInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateManyWithoutBookmarkNestedInput", {
  isAbstract: true
})
export class TagUpdateManyWithoutBookmarkNestedInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutBookmarkInput], {
    nullable: true
  })
  create?: TagCreateWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutBookmarkInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutBookmarkInput], {
    nullable: true
  })
  upsert?: TagUpsertWithWhereUniqueWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => TagCreateManyBookmarkInputEnvelope, {
    nullable: true
  })
  createMany?: TagCreateManyBookmarkInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutBookmarkInput], {
    nullable: true
  })
  update?: TagUpdateWithWhereUniqueWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutBookmarkInput], {
    nullable: true
  })
  updateMany?: TagUpdateManyWithWhereWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagScalarWhereInput[] | undefined;
}
