import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutUserTagInput } from "../inputs/TagCreateWithoutUserTagInput";
import { TagUpdateWithoutUserTagInput } from "../inputs/TagUpdateWithoutUserTagInput";

@TypeGraphQL.InputType("TagUpsertWithoutUserTagInput", {
  isAbstract: true
})
export class TagUpsertWithoutUserTagInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutUserTagInput, {
    nullable: false
  })
  update!: TagUpdateWithoutUserTagInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutUserTagInput, {
    nullable: false
  })
  create!: TagCreateWithoutUserTagInput;
}
