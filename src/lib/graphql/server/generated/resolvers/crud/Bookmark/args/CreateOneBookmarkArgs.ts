import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkCreateInput } from "../../../inputs/BookmarkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkCreateInput, {
    nullable: false
  })
  data!: BookmarkCreateInput;
}
