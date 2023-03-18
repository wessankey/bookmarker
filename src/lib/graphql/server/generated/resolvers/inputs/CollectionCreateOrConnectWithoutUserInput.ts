import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutUserInput } from "../inputs/CollectionCreateWithoutUserInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class CollectionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutUserInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutUserInput;
}