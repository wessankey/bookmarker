import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutUsersInput } from "../inputs/BookmarkCreateOrConnectWithoutUsersInput";
import { BookmarkCreateWithoutUsersInput } from "../inputs/BookmarkCreateWithoutUsersInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutUsersInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutUsersInput";
import { BookmarkUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutUsersInput";
import { BookmarkUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutUsersInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class BookmarkUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutUsersInput], {
    nullable: true
  })
  create?: BookmarkCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: BookmarkUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: BookmarkUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: BookmarkUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
