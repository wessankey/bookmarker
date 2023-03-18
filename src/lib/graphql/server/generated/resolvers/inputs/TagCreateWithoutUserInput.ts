import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateNestedManyWithoutTagsInput } from "../inputs/BookmarkCreateNestedManyWithoutTagsInput";

@TypeGraphQL.InputType("TagCreateWithoutUserInput", {
  isAbstract: true
})
export class TagCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagColor!: string;

  @TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  bookmarks?: BookmarkCreateNestedManyWithoutTagsInput | undefined;
}
