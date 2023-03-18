import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagWhereUniqueInput } from "../../../inputs/BookmarkTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagWhereUniqueInput, {
    nullable: false
  })
  where!: BookmarkTagWhereUniqueInput;
}
