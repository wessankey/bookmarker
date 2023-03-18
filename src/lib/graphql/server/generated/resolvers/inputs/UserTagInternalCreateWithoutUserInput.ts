import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateNestedManyWithoutUserTagInput } from "../inputs/BookmarkTagCreateNestedManyWithoutUserTagInput";
import { TagCreateNestedOneWithoutUserTagInput } from "../inputs/TagCreateNestedOneWithoutUserTagInput";

@TypeGraphQL.InputType("UserTagInternalCreateWithoutUserInput", {
  isAbstract: true
})
export class UserTagInternalCreateWithoutUserInput {
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
