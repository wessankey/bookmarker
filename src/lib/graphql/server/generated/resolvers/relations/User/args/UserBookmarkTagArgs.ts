import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagOrderByWithRelationInput } from "../../../inputs/BookmarkTagOrderByWithRelationInput";
import { BookmarkTagWhereInput } from "../../../inputs/BookmarkTagWhereInput";
import { BookmarkTagWhereUniqueInput } from "../../../inputs/BookmarkTagWhereUniqueInput";
import { BookmarkTagScalarFieldEnum } from "../../../../enums/BookmarkTagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  where?: BookmarkTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookmarkTagOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookmarkTagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BookmarkTagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"bookmarkId" | "tagId" | "userId" | "empty"> | undefined;
}
