import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyBookmarkInputEnvelope } from "../inputs/BookmarkTagCreateManyBookmarkInputEnvelope";
import { BookmarkTagCreateOrConnectWithoutBookmarkInput } from "../inputs/BookmarkTagCreateOrConnectWithoutBookmarkInput";
import { BookmarkTagCreateWithoutBookmarkInput } from "../inputs/BookmarkTagCreateWithoutBookmarkInput";
import { BookmarkTagScalarWhereInput } from "../inputs/BookmarkTagScalarWhereInput";
import { BookmarkTagUpdateManyWithWhereWithoutBookmarkInput } from "../inputs/BookmarkTagUpdateManyWithWhereWithoutBookmarkInput";
import { BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput } from "../inputs/BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput";
import { BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput } from "../inputs/BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpdateManyWithoutBookmarkNestedInput", {
  isAbstract: true
})
export class BookmarkTagUpdateManyWithoutBookmarkNestedInput {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateWithoutBookmarkInput], {
    nullable: true
  })
  create?: BookmarkTagCreateWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagCreateOrConnectWithoutBookmarkInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkTagCreateOrConnectWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput], {
    nullable: true
  })
  upsert?: BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagCreateManyBookmarkInputEnvelope, {
    nullable: true
  })
  createMany?: BookmarkTagCreateManyBookmarkInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput], {
    nullable: true
  })
  update?: BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagUpdateManyWithWhereWithoutBookmarkInput], {
    nullable: true
  })
  updateMany?: BookmarkTagUpdateManyWithWhereWithoutBookmarkInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookmarkTagScalarWhereInput[] | undefined;
}
