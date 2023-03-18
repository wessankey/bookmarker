import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateNestedManyWithoutUserTagInput } from "../inputs/BookmarkTagCreateNestedManyWithoutUserTagInput";
import { TagCreateNestedOneWithoutUserTagInput } from "../inputs/TagCreateNestedOneWithoutUserTagInput";
import { UserCreateNestedOneWithoutTagsInput } from "../inputs/UserCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("UserTagInternalCreateInput", {
  isAbstract: true
})
export class UserTagInternalCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTagsInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutUserTagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutUserTagInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagColor!: string;

  @TypeGraphQL.Field(_type => BookmarkTagCreateNestedManyWithoutUserTagInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagCreateNestedManyWithoutUserTagInput | undefined;
}
