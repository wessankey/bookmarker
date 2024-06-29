import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutCollectionsInput } from "../inputs/BookmarkCreateWithoutCollectionsInput";
import { BookmarkUpdateWithoutCollectionsInput } from "../inputs/BookmarkUpdateWithoutCollectionsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkUpsertWithWhereUniqueWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutCollectionsInput, {
    nullable: false
  })
  update!: BookmarkUpdateWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutCollectionsInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutCollectionsInput;
}
