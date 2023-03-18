import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagWhereInput } from "../../../inputs/BookmarkTagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  where?: BookmarkTagWhereInput | undefined;
}
