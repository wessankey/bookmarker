import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateWithoutUserTagInput } from "../inputs/BookmarkTagCreateWithoutUserTagInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagCreateOrConnectWithoutUserTagInput", {
  isAbstract: true
})
export class BookmarkTagCreateOrConnectWithoutUserTagInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateWithoutUserTagInput, {
    nullable: false
  })
  create!: BookmarkTagCreateWithoutUserTagInput;
}
