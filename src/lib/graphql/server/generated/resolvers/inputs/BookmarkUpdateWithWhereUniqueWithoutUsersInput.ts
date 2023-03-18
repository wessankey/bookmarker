import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateWithoutUsersInput } from "../inputs/BookmarkUpdateWithoutUsersInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class BookmarkUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: BookmarkUpdateWithoutUsersInput;
}
