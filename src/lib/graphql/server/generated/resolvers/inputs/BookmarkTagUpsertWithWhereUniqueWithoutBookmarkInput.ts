import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateWithoutBookmarkInput } from "../inputs/BookmarkTagCreateWithoutBookmarkInput";
import { BookmarkTagUpdateWithoutBookmarkInput } from "../inputs/BookmarkTagUpdateWithoutBookmarkInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput", {
  isAbstract: true
})
export class BookmarkTagUpsertWithWhereUniqueWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateWithoutBookmarkInput, {
    nullable: false
  })
  update!: BookmarkTagUpdateWithoutBookmarkInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateWithoutBookmarkInput, {
    nullable: false
  })
  create!: BookmarkTagCreateWithoutBookmarkInput;
}
