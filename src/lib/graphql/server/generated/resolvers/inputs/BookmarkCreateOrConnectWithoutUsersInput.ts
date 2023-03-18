import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutUsersInput } from "../inputs/BookmarkCreateWithoutUsersInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class BookmarkCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutUsersInput, {
    nullable: false
  })
  create!: BookmarkCreateWithoutUsersInput;
}
