import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutBookmarkInput } from "../inputs/TagUpdateWithoutBookmarkInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateWithWhereUniqueWithoutBookmarkInput", {
  isAbstract: true
})
export class TagUpdateWithWhereUniqueWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutBookmarkInput, {
    nullable: false
  })
  data!: TagUpdateWithoutBookmarkInput;
}
