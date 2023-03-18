import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { Bookmark } from "../models/Bookmark";
import { BookmarkTag } from "../models/BookmarkTag";
import { Collection } from "../models/Collection";
import { ExternalServiceCredential } from "../models/ExternalServiceCredential";
import { Session } from "../models/Session";
import { UserTagInternal } from "../models/UserTagInternal";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  bookmarks?: Bookmark[];

  collections?: Collection[];

  accounts?: Account[];

  sessions?: Session[];

  tags?: UserTagInternal[];

  externalServices?: ExternalServiceCredential[];

  BookmarkTag?: BookmarkTag[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
