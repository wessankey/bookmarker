import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyUserTagInputEnvelope } from "../inputs/BookmarkTagCreateManyUserTagInputEnvelope";
import { BookmarkTagCreateOrConnectWithoutUserTagInput } from "../inputs/BookmarkTagCreateOrConnectWithoutUserTagInput";
import { BookmarkTagCreateWithoutUserTagInput } from "../inputs/BookmarkTagCreateWithoutUserTagInput";
import { BookmarkTagScalarWhereInput } from "../inputs/BookmarkTagScalarWhereInput";
import { BookmarkTagUpdateManyWithWhereWithoutUserTagInput } from "../inputs/BookmarkTagUpdateManyWithWhereWithoutUserTagInput";
import { BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput } from "../inputs/BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput";
import { BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput } from "../inputs/BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpdateManyWithoutUserTagNestedInput", {
  isAbstract: true
})
export class BookmarkTagUpdateManyWithoutUserTagNestedInput {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateWithoutUserTagInput], {
    nullable: true
  })
  create?: BookmarkTagCreateWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagCreateOrConnectWithoutUserTagInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkTagCreateOrConnectWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput], {
    nullable: true
  })
  upsert?: BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateManyUserTagInputEnvelope, {
    nullable: true
  })
  createMany?: BookmarkTagCreateManyUserTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  set?: BookmarkTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookmarkTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  delete?: BookmarkTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput], {
    nullable: true
  })
  update?: BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpdateManyWithWhereWithoutUserTagInput], {
    nullable: true
  })
  updateMany?: BookmarkTagUpdateManyWithWhereWithoutUserTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookmarkTagScalarWhereInput[] | undefined;
}
