import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagOrderByWithAggregationInput } from "../../../inputs/BookmarkTagOrderByWithAggregationInput";
import { BookmarkTagScalarWhereWithAggregatesInput } from "../../../inputs/BookmarkTagScalarWhereWithAggregatesInput";
import { BookmarkTagWhereInput } from "../../../inputs/BookmarkTagWhereInput";
import { BookmarkTagScalarFieldEnum } from "../../../../enums/BookmarkTagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  where?: BookmarkTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookmarkTagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"bookmarkId" | "tagId" | "userId" | "empty">;

  @TypeGraphQL.Field(_type => BookmarkTagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookmarkTagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
