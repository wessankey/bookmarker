import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("BookmarkTagMaxAggregate", {
  isAbstract: true
})
export class BookmarkTagMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookmarkId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  empty!: string | null;
}
