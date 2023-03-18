import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyUserInputEnvelope } from "../inputs/BookmarkTagCreateManyUserInputEnvelope";
import { BookmarkTagCreateOrConnectWithoutUserInput } from "../inputs/BookmarkTagCreateOrConnectWithoutUserInput";
import { BookmarkTagCreateWithoutUserInput } from "../inputs/BookmarkTagCreateWithoutUserInput";
import { BookmarkTagScalarWhereInput } from "../inputs/BookmarkTagScalarWhereInput";
import { BookmarkTagUpdateManyWithWhereWithoutUserInput } from "../inputs/BookmarkTagUpdateManyWithWhereWithoutUserInput";
import { BookmarkTagUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookmarkTagUpdateWithWhereUniqueWithoutUserInput";
import { BookmarkTagUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookmarkTagUpsertWithWhereUniqueWithoutUserInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class BookmarkTagUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookmarkTagCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkTagCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookmarkTagUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookmarkTagCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookmarkTagUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookmarkTagUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookmarkTagUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookmarkTagScalarWhereInput[] | undefined;
}
