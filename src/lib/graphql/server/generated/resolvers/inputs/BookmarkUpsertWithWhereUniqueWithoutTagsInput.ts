import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutTagsInput } from "../inputs/BookmarkCreateWithoutTagsInput";
import { BookmarkUpdateWithoutTagsInput } from "../inputs/BookmarkUpdateWithoutTagsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutTagsInput", {
  isAbstract: true
})
export class BookmarkUpsertWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: BookmarkUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutTagsInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutTagsInput;
}
