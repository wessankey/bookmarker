import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutUserTagInput } from "../inputs/TagCreateWithoutUserTagInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutUserTagInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutUserTagInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutUserTagInput, {
    nullable: false
  })
  create!: TagCreateWithoutUserTagInput;
}
