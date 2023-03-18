import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutUserTagInput } from "../inputs/TagCreateNestedOneWithoutUserTagInput";
import { UserCreateNestedOneWithoutTagsInput } from "../inputs/UserCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("UserTagInternalCreateWithoutBookmarkTagInput", {
  isAbstract: true
})
export class UserTagInternalCreateWithoutBookmarkTagInput {
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
}
