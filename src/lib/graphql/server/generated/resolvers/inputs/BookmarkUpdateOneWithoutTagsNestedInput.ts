import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateOrConnectWithoutTagsInput } from "../inputs/BookmarkCreateOrConnectWithoutTagsInput";
import { BookmarkCreateWithoutTagsInput } from "../inputs/BookmarkCreateWithoutTagsInput";
import { BookmarkUpdateWithoutTagsInput } from "../inputs/BookmarkUpdateWithoutTagsInput";
import { BookmarkUpsertWithoutTagsInput } from "../inputs/BookmarkUpsertWithoutTagsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateOneWithoutTagsNestedInput", {
  isAbstract: true
})
export class BookmarkUpdateOneWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => BookmarkCreateWithoutTagsInput, {
    nullable: true
  })
  create?: BookmarkCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpsertWithoutTagsInput, {
    nullable: true
  })
  upsert?: BookmarkUpsertWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: true
  })
  connect?: BookmarkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutTagsInput, {
    nullable: true
  })
  update?: BookmarkUpdateWithoutTagsInput | undefined;
}
