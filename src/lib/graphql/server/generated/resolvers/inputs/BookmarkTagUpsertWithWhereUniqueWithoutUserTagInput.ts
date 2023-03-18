import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateWithoutUserTagInput } from "../inputs/BookmarkTagCreateWithoutUserTagInput";
import { BookmarkTagUpdateWithoutUserTagInput } from "../inputs/BookmarkTagUpdateWithoutUserTagInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput", {
  isAbstract: true
})
export class BookmarkTagUpsertWithWhereUniqueWithoutUserTagInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateWithoutUserTagInput, {
    nullable: false
  })
  update!: BookmarkTagUpdateWithoutUserTagInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateWithoutUserTagInput, {
    nullable: false
  })
  create!: BookmarkTagCreateWithoutUserTagInput;
}
