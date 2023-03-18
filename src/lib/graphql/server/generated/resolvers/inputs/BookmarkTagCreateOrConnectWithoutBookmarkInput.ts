import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateWithoutBookmarkInput } from "../inputs/BookmarkTagCreateWithoutBookmarkInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagCreateOrConnectWithoutBookmarkInput", {
  isAbstract: true
})
export class BookmarkTagCreateOrConnectWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateWithoutBookmarkInput, {
    nullable: false
  })
  create!: BookmarkTagCreateWithoutBookmarkInput;
}
