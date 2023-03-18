import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagUpdateWithoutBookmarkInput } from "../inputs/BookmarkTagUpdateWithoutBookmarkInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput", {
  isAbstract: true
})
export class BookmarkTagUpdateWithWhereUniqueWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateWithoutBookmarkInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateWithoutBookmarkInput;
}
