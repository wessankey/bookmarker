import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BookmarkTagScalarWhereInput", {
  isAbstract: true
})
export class BookmarkTagScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereInput], {
    nullable: true
  })
  AND?: BookmarkTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereInput], {
    nullable: true
  })
  OR?: BookmarkTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarWhereInput], {
    nullable: true
  })
  NOT?: BookmarkTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookmarkId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  empty?: StringNullableFilter | undefined;
}
