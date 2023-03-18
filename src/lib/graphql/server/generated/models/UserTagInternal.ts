import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BookmarkTag } from "../models/BookmarkTag";
import { Tag } from "../models/Tag";
import { User } from "../models/User";
import { UserTagInternalCount } from "../resolvers/outputs/UserTagInternalCount";

@TypeGraphQL.ObjectType("UserTagInternal", {
  isAbstract: true
})
export class UserTagInternal {
  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  tag?: Tag;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagColor!: string;

  BookmarkTag?: BookmarkTag[];

  @TypeGraphQL.Field(_type => UserTagInternalCount, {
    nullable: true
  })
  _count?: UserTagInternalCount | null;
}
