import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookmarkTagScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookmarkTagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookmarkTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookmarkTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookmarkTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bookmarkId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tagId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  empty?: StringNullableWithAggregatesFilter | undefined;
}
