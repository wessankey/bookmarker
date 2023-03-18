import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkWhereInput } from "../inputs/BookmarkWhereInput";

@TypeGraphQL.InputType("BookmarkRelationFilter", {
  isAbstract: true
})
export class BookmarkRelationFilter {
  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true
  })
  is?: BookmarkWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true
  })
  isNot?: BookmarkWhereInput | undefined;
}
