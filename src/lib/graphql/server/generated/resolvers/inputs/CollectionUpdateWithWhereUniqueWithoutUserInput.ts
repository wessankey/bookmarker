import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateWithoutUserInput } from "../inputs/CollectionUpdateWithoutUserInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CollectionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CollectionUpdateWithoutUserInput;
}
