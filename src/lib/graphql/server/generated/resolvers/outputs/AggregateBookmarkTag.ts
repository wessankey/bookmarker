import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkTagCountAggregate } from "../outputs/BookmarkTagCountAggregate";
import { BookmarkTagMaxAggregate } from "../outputs/BookmarkTagMaxAggregate";
import { BookmarkTagMinAggregate } from "../outputs/BookmarkTagMinAggregate";

@TypeGraphQL.ObjectType("AggregateBookmarkTag", {
  isAbstract: true
})
export class AggregateBookmarkTag {
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
