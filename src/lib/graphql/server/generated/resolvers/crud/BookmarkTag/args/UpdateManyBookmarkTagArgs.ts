import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagUpdateManyMutationInput } from "../../../inputs/BookmarkTagUpdateManyMutationInput";
import { BookmarkTagWhereInput } from "../../../inputs/BookmarkTagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookmarkTagArgs {
  @TypeGraphQL.Field(_type => BookmarkTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookmarkTagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookmarkTagWhereInput, {
    nullable: true
  })
  where?: BookmarkTagWhereInput | undefined;
}
