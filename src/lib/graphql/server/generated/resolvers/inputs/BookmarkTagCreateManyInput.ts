import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookmarkTagCreateManyInput", {
  isAbstract: true
})
export class BookmarkTagCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookmarkId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty?: string | undefined;
}
