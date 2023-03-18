import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateNestedManyWithoutTagsInput } from "../inputs/BookmarkCreateNestedManyWithoutTagsInput";
import { UserCreateNestedOneWithoutTagsInput } from "../inputs/UserCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("TagCreateInput", {
  isAbstract: true
})
export class TagCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTagsInput;

  @TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  bookmarks?: BookmarkCreateNestedManyWithoutTagsInput | undefined;
}
