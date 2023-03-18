import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Bookmark } from "../models/Bookmark";
import { User } from "../models/User";
import { CollectionCount } from "../resolvers/outputs/CollectionCount";

@TypeGraphQL.ObjectType("Collection", {
  isAbstract: true
})
export class Collection {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  bookmarks?: Bookmark[];

  User?: User | null;

  @TypeGraphQL.Field(_type => CollectionCount, {
    nullable: true
  })
  _count?: CollectionCount | null;
}
