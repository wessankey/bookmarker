import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagUpdateInput } from "../../../inputs/BookmarkTagUpdateInput";
import { BookmarkTagWhereUniqueInput } from "../../../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagUpdateInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateInput;

  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;
}
