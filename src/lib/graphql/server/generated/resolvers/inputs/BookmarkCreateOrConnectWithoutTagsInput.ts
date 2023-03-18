import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutTagsInput } from "../inputs/BookmarkCreateWithoutTagsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutTagsInput", {
  isAbstract: true
})
export class BookmarkCreateOrConnectWithoutTagsInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutTagsInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutTagsInput;
}
