import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutBookmarksInput } from "../inputs/TagCreateWithoutBookmarksInput";
import { TagUpdateWithoutBookmarksInput } from "../inputs/TagUpdateWithoutBookmarksInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpsertWithWhereUniqueWithoutBookmarksInput", {
  isAbstract: true
})
export class TagUpsertWithWhereUniqueWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutBookmarksInput, {
    nullable: false
  })
  update!: TagUpdateWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutBookmarksInput, {
    nullable: false
  })
  create!: TagCreateWithoutBookmarksInput;
}
