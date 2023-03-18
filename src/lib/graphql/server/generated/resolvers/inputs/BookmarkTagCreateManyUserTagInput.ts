import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookmarkTagCreateManyUserTagInput", {
  isAbstract: true
})
export class BookmarkTagCreateManyUserTagInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookmarkId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty?: string | undefined;
}
