import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateWithoutUserInput } from "../inputs/BookmarkTagCreateWithoutUserInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookmarkTagCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookmarkTagCreateWithoutUserInput;
}
