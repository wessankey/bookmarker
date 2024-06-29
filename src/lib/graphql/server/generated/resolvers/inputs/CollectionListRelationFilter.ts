import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";

@TypeGraphQL.InputType("CollectionListRelationFilter", {
  isAbstract: true
})
export class CollectionListRelationFilter {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  every?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  some?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  none?: CollectionWhereInput | undefined;
}
