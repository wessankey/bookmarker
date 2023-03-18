import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutBookmarkTagInput } from "../inputs/BookmarkCreateWithoutBookmarkTagInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutBookmarkTagInput", {
  isAbstract: true
})
export class BookmarkCreateOrConnectWithoutBookmarkTagInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutBookmarkTagInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutBookmarkTagInput;
}
