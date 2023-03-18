import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateWithoutCollectionsInput } from "../inputs/BookmarkUpdateWithoutCollectionsInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkUpdateWithWhereUniqueWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutCollectionsInput, {
    nullable: false
  })
  data!: BookmarkUpdateWithoutCollectionsInput;
}
