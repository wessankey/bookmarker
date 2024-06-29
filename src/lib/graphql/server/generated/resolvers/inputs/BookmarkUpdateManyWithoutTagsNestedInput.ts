import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutTagsInput } from "../inputs/BookmarkCreateOrConnectWithoutTagsInput";
import { BookmarkCreateWithoutTagsInput } from "../inputs/BookmarkCreateWithoutTagsInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutTagsInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutTagsInput";
import { BookmarkUpdateWithWhereUniqueWithoutTagsInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutTagsInput";
import { BookmarkUpsertWithWhereUniqueWithoutTagsInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutTagsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateManyWithoutTagsNestedInput", {
  isAbstract: true
})
export class BookmarkUpdateManyWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutTagsInput], {
    nullable: true
  })
  create?: BookmarkCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  upsert?: BookmarkUpsertWithWhereUniqueWithoutTagsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  update?: BookmarkUpdateWithWhereUniqueWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutTagsInput], {
    nullable: true
  })
  updateMany?: BookmarkUpdateManyWithWhereWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
