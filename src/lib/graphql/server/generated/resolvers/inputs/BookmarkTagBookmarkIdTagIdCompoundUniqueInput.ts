import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookmarkTagBookmarkIdTagIdCompoundUniqueInput", {
  isAbstract: true
})
export class BookmarkTagBookmarkIdTagIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookmarkId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;
}
