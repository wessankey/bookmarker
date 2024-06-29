import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutUserInput } from "../inputs/TagCreateWithoutUserInput";
import { TagUpdateWithoutUserInput } from "../inputs/TagUpdateWithoutUserInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TagUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TagUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutUserInput, {
    nullable: false
  })
  create!: TagCreateWithoutUserInput;
}
