import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateWithoutBookmarksInput } from "../inputs/CollectionUpdateWithoutBookmarksInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateWithWhereUniqueWithoutBookmarksInput", {
  isAbstract: true
})
export class CollectionUpdateWithWhereUniqueWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutBookmarksInput, {
    nullable: false
  })
  data!: CollectionUpdateWithoutBookmarksInput;
}
