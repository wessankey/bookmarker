import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Bookmark } from "../models/Bookmark";
import { User } from "../models/User";
import { UserTagInternal } from "../models/UserTagInternal";

@TypeGraphQL.ObjectType("BookmarkTag", {
  isAbstract: true
})
export class BookmarkTag {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookmarkId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty?: string | null;

  bookmark?: Bookmark;

  user?: User;

  userTag?: UserTagInternal;
}
