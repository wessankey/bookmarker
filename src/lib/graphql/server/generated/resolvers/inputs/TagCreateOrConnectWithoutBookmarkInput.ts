import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutBookmarkInput } from "../inputs/TagCreateWithoutBookmarkInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutBookmarkInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutBookmarkInput, {
    nullable: false
  })
  create!: TagCreateWithoutBookmarkInput;
}
