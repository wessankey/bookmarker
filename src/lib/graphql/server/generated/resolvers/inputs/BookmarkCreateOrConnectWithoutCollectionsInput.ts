import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutCollectionsInput } from "../inputs/BookmarkCreateWithoutCollectionsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkCreateOrConnectWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutCollectionsInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutCollectionsInput;
}
