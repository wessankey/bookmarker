import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkTagCreateManyInput } from "../../../inputs/BookmarkTagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookmarkTagArgs {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateManyInput], {
    nullable: false
  })
  data!: BookmarkTagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
