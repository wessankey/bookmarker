import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagWhereInput } from "../inputs/BookmarkTagWhereInput";

@TypeGraphQL.InputType("BookmarkTagListRelationFilter", {
  isAbstract: true
})
export class BookmarkTagListRelationFilter {
  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  every?: BookmarkTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  some?: BookmarkTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  none?: BookmarkTagWhereInput | undefined;
}
