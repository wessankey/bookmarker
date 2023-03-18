import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagBookmarkIdTagIdCompoundUniqueInput } from "../inputs/BookmarkTagBookmarkIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType("BookmarkTagWhereUniqueInput", {
  isAbstract: true
})
export class BookmarkTagWhereUniqueInput {
  @TypeGraphQL.Field(_type => BookmarkTagBookmarkIdTagIdCompoundUniqueInput, {
    nullable: true
  })
  bookmarkId_tagId?: BookmarkTagBookmarkIdTagIdCompoundUniqueInput | undefined;
}
