import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagUpdateWithoutUserTagInput } from "../inputs/BookmarkTagUpdateWithoutUserTagInput";
import { BookmarkTagWhereUniqueInput } from "../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput", {
  isAbstract: true
})
export class BookmarkTagUpdateWithWhereUniqueWithoutUserTagInput {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateWithoutUserTagInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateWithoutUserTagInput;
}
