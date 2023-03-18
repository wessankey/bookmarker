import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutBookmarksInput } from "../inputs/TagUpdateWithoutBookmarksInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateWithWhereUniqueWithoutBookmarksInput", {
  isAbstract: true
})
export class TagUpdateWithWhereUniqueWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutBookmarksInput, {
    nullable: false
  })
  data!: TagUpdateWithoutBookmarksInput;
}
