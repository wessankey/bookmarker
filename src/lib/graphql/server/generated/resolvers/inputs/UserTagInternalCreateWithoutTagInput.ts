import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateNestedManyWithoutUserTagInput } from "../inputs/BookmarkTagCreateNestedManyWithoutUserTagInput";
import { UserCreateNestedOneWithoutTagsInput } from "../inputs/UserCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("UserTagInternalCreateWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTagsInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagColor!: string;

  @TypeGraphQL.Field(_type => BookmarkTagCreateNestedManyWithoutUserTagInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagCreateNestedManyWithoutUserTagInput | undefined;
}
