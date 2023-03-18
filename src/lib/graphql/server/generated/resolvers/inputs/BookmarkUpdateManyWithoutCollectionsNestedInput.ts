import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutCollectionsInput } from "../inputs/BookmarkCreateOrConnectWithoutCollectionsInput";
import { BookmarkCreateWithoutCollectionsInput } from "../inputs/BookmarkCreateWithoutCollectionsInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutCollectionsInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutCollectionsInput";
import { BookmarkUpdateWithWhereUniqueWithoutCollectionsInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutCollectionsInput";
import { BookmarkUpsertWithWhereUniqueWithoutCollectionsInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutCollectionsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateManyWithoutCollectionsNestedInput", {
  isAbstract: true
})
export class BookmarkUpdateManyWithoutCollectionsNestedInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutCollectionsInput], {
    nullable: true
  })
  create?: BookmarkCreateWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutCollectionsInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutCollectionsInput], {
    nullable: true
  })
  upsert?: BookmarkUpsertWithWhereUniqueWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  set?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  delete?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutCollectionsInput], {
    nullable: true
  })
  update?: BookmarkUpdateWithWhereUniqueWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutCollectionsInput], {
    nullable: true
  })
  updateMany?: BookmarkUpdateManyWithWhereWithoutCollectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
