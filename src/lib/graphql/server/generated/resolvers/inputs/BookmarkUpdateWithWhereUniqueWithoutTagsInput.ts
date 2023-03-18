import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateWithoutTagsInput } from "../inputs/BookmarkUpdateWithoutTagsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutTagsInput", {
  isAbstract: true
})
export class BookmarkUpdateWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutTagsInput, {
    nullable: false
  })
  data!: BookmarkUpdateWithoutTagsInput;
}
