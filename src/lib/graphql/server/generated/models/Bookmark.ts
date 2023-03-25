import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Collection } from "../models/Collection";
import { Tag } from "../models/Tag";
import { User } from "../models/User";
import { BookmarkCount } from "../resolvers/outputs/BookmarkCount";

@TypeGraphQL.ObjectType("Bookmark", {
  isAbstract: true
})
export class Bookmark {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  tags?: Tag[];

  collections?: Collection[];

  User?: User;

  @TypeGraphQL.Field(_type => BookmarkCount, {
    nullable: true
  })
  _count?: BookmarkCount | null;
}
