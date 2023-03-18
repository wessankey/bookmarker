import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCreateNestedManyWithoutBookmarkInput } from "../inputs/BookmarkTagCreateNestedManyWithoutBookmarkInput";
import { CollectionCreateNestedManyWithoutBookmarksInput } from "../inputs/CollectionCreateNestedManyWithoutBookmarksInput";

@TypeGraphQL.InputType("BookmarkCreateWithoutUsersInput", {
  isAbstract: true
})
export class BookmarkCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => BookmarkTagCreateNestedManyWithoutBookmarkInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagCreateNestedManyWithoutBookmarkInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateNestedManyWithoutBookmarksInput, {
    nullable: true
  })
  collections?: CollectionCreateNestedManyWithoutBookmarksInput | undefined;
}