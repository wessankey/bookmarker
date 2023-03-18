import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutUsersInput } from "../inputs/BookmarkCreateWithoutUsersInput";
import { BookmarkUpdateWithoutUsersInput } from "../inputs/BookmarkUpdateWithoutUsersInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class BookmarkUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: BookmarkUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutUsersInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutUsersInput;
}
