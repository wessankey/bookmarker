import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutBookmarkTagInput } from "../inputs/BookmarkCreateWithoutBookmarkTagInput";
import { BookmarkUpdateWithoutBookmarkTagInput } from "../inputs/BookmarkUpdateWithoutBookmarkTagInput";

@TypeGraphQL.InputType("BookmarkUpsertWithoutBookmarkTagInput", {
  isAbstract: true
})
export class BookmarkUpsertWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutBookmarkTagInput, {
    nullable: false
  })
  update!: BookmarkUpdateWithoutBookmarkTagInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutBookmarkTagInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutBookmarkTagInput;
}
