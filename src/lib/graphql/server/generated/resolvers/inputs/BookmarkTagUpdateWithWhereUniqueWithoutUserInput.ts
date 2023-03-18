import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagUpdateWithoutUserInput } from "../inputs/BookmarkTagUpdateWithoutUserInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookmarkTagUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateWithoutUserInput;
}
