import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutUserInput } from "../inputs/CollectionCreateWithoutUserInput";
import { CollectionUpdateWithoutUserInput } from "../inputs/CollectionUpdateWithoutUserInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CollectionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CollectionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutUserInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutUserInput;
}
