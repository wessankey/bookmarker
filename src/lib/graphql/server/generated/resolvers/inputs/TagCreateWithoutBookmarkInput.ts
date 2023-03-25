import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutTagsInput } from "../inputs/UserCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("TagCreateWithoutBookmarkInput", {
  isAbstract: true
})
export class TagCreateWithoutBookmarkInput {
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
  User!: UserCreateNestedOneWithoutTagsInput;
}
