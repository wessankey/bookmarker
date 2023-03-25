import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Bookmark } from "../models/Bookmark";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Tag", {
  isAbstract: true
})
export class Tag {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagColor!: string;

  User?: User;

  Bookmark?: Bookmark | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookmarkId?: string | null;
}
