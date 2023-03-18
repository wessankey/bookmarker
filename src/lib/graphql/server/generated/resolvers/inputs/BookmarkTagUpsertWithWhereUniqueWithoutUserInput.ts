import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateWithoutUserInput } from "../inputs/BookmarkTagCreateWithoutUserInput";
import { BookmarkTagUpdateWithoutUserInput } from "../inputs/BookmarkTagUpdateWithoutUserInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookmarkTagUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookmarkTagUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookmarkTagCreateWithoutUserInput;
}
