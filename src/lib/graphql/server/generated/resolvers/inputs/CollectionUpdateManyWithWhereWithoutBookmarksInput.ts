import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionScalarWhereInput } from "../inputs/CollectionScalarWhereInput";
import { CollectionUpdateManyMutationInput } from "../inputs/CollectionUpdateManyMutationInput";

@TypeGraphQL.InputType("CollectionUpdateManyWithWhereWithoutBookmarksInput", {
  isAbstract: true
})
export class CollectionUpdateManyWithWhereWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => CollectionScalarWhereInput, {
    nullable: false
  })
  where!: CollectionScalarWhereInput;

  @TypeGraphQL.Field(_type => CollectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: CollectionUpdateManyMutationInput;
}
