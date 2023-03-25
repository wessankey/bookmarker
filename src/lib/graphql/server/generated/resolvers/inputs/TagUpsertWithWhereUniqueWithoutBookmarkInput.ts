import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutBookmarkInput } from "../inputs/TagCreateWithoutBookmarkInput";
import { TagUpdateWithoutBookmarkInput } from "../inputs/TagUpdateWithoutBookmarkInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpsertWithWhereUniqueWithoutBookmarkInput", {
  isAbstract: true
})
export class TagUpsertWithWhereUniqueWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutBookmarkInput, {
    nullable: false
  })
  update!: TagUpdateWithoutBookmarkInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutBookmarkInput, {
    nullable: false
  })
  create!: TagCreateWithoutBookmarkInput;
}
