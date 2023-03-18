import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateManyBookmarkInput } from "../inputs/BookmarkTagCreateManyBookmarkInput";

@TypeGraphQL.InputType("BookmarkTagCreateManyBookmarkInputEnvelope", {
  isAbstract: true
})
export class BookmarkTagCreateManyBookmarkInputEnvelope {
  @TypeGraphQL.Field(_type => [BookmarkTagCreateManyBookmarkInput], {
    nullable: false
  })
  data!: BookmarkTagCreateManyBookmarkInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
