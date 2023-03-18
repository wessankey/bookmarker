import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagCreateInput } from "../../../inputs/BookmarkTagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagCreateInput, {
    nullable: false
  })
  data!: BookmarkTagCreateInput;
}
