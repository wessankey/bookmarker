import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagCreateInput } from "../../../inputs/BookmarkTagCreateInput";
import { BookmarkTagUpdateInput } from "../../../inputs/BookmarkTagUpdateInput";
import { BookmarkTagWhereUniqueInput } from "../../../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkTagCreateInput, {
    nullable: false
  })
  create!: BookmarkTagCreateInput;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateInput, {
    nullable: false
  })
  update!: BookmarkTagUpdateInput;
}
