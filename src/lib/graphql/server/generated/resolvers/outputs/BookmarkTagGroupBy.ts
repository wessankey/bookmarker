import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCountAggregate } from "../outputs/BookmarkTagCountAggregate";
import { BookmarkTagMaxAggregate } from "../outputs/BookmarkTagMaxAggregate";
import { BookmarkTagMinAggregate } from "../outputs/BookmarkTagMinAggregate";

@TypeGraphQL.ObjectType("BookmarkTagGroupBy", {
  isAbstract: true
})
export class BookmarkTagGroupBy {
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
  empty!: string | null;

  @TypeGraphQL.Field(_type => BookmarkTagCountAggregate, {
    nullable: true
  })
  _count!: BookmarkTagCountAggregate | null;

  @TypeGraphQL.Field(_type => BookmarkTagMinAggregate, {
    nullable: true
  })
  _min!: BookmarkTagMinAggregate | null;

  @TypeGraphQL.Field(_type => BookmarkTagMaxAggregate, {
    nullable: true
  })
  _max!: BookmarkTagMaxAggregate | null;
}
