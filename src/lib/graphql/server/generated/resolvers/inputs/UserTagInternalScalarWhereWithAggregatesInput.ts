import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserTagInternalScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserTagInternalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserTagInternalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserTagInternalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTagInternalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserTagInternalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tagId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tagColor?: StringWithAggregatesFilter | undefined;
}
