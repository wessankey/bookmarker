import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutBookmarksInput } from "../inputs/TagCreateWithoutBookmarksInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutBookmarksInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutBookmarksInput, {
    nullable: false
  })
  create!: TagCreateWithoutBookmarksInput;
}
