import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CollectionScalarWhereInput", {
  isAbstract: true
})
export class CollectionScalarWhereInput {
  @TypeGraphQL.Field(_type => [CollectionScalarWhereInput], {
    nullable: true
  })
  AND?: CollectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereInput], {
    nullable: true
  })
  OR?: CollectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereInput], {
    nullable: true
  })
  NOT?: CollectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  public?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;
}
