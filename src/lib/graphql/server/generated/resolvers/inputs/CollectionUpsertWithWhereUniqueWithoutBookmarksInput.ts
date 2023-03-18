import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutBookmarksInput } from "../inputs/CollectionCreateWithoutBookmarksInput";
import { CollectionUpdateWithoutBookmarksInput } from "../inputs/CollectionUpdateWithoutBookmarksInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpsertWithWhereUniqueWithoutBookmarksInput", {
  isAbstract: true
})
export class CollectionUpsertWithWhereUniqueWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutBookmarksInput, {
    nullable: false
  })
  update!: CollectionUpdateWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutBookmarksInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutBookmarksInput;
}
